import React, { Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { setCardParams } from '../../store/cardParams/actions';
import { requestGitInfo } from '../../store/gitUser/actions';
import Loading from '../../components/Loading';
const Card = lazy(() => import('./Card'));

const InfoCard = () => {
  const dispatch = useDispatch();

  var codec = require('json-url')('lzw');
  const { hash } = useParams();

  codec.decompress(hash).then(decoded => {
    dispatch(setCardParams(decoded));
    dispatch(requestGitInfo(decoded.gitUserName));
  });

  return (
    <Suspense fallback={<Loading />}>
      <Card />
    </Suspense>
  )
}

export default InfoCard;