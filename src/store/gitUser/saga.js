import { REQUEST_GIT_INFO, SUCCESS_GIT_INFO, ERROR_GIT_INFO } from './constants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { api } from '../../api';

async function doRequest(url) {
  const response = await api.get(url);
  return response;
}

function* requestGitInfo (action) {
  try {
    const userInfo = yield call(doRequest, `/users/${action.userName}`);
    if (userInfo.data) {
      const userFollowers = yield call(doRequest, `/users/${action.userName}/followers`);
      const userRepos = yield call(doRequest, `/users/${action.userName}/repos`);
      const userData = {
        ...userInfo.data,
        repos: userRepos.data,
        followers: userFollowers.data
      }

      yield put({
        type: SUCCESS_GIT_INFO,
        payload: { data: userData }
      });
    } else {

    }

  } catch (error) {
    yield put({
      type: ERROR_GIT_INFO,
      payload: { error }
    });
  }
}

export function* watchGitRequest() {
 yield takeLatest(REQUEST_GIT_INFO, requestGitInfo)
}