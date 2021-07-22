import React, {Suspense, lazy} from 'react';
import Loading from '../../../components/Loading';
import { ThemeProvider } from 'styled-components'
import { CardContainer, CardHeader, Column } from './styled';
import { useSelector } from 'react-redux';
const FollowerCard = lazy(() => import('../../../components/FollowerCard'));
const RepoCard = lazy(() => import('../../../components/RepoCard'));

const Card = () => {
  const theme = useSelector((state) => state.cardParams.data);
  const userInfoData = useSelector((state) => state.gitUser.data);
  const userInfoLoading = useSelector((state) => state.gitUser.loading);
  const userInfoError = useSelector((state) => state.gitUser.error);

  return (
    <Suspense fallback={<Loading />}>
      {
        !userInfoLoading && 
        <ThemeProvider theme={theme}>
          <CardContainer>
            <CardHeader>
              <div className="image-block">
                <img src={userInfoData.avatar_url} alt="diogo bif" title="title" />
              </div>
              <div className="info-block">
                <span className="info-name">{userInfoData.name || userInfoData.login}</span>
                <span className="info-username">@{userInfoData.login}</span>
                <span className="info-description">{userInfoData.bio}</span>
                <div className="info-followers">
                  <i className="fa fa-users"></i>
                  <span><strong>{userInfoData.followers.length || 0}</strong> followers</span>
                </div>
              </div>
            </CardHeader>
            {
              Number(theme.showFollowers) ? 
              <Column bgColor={theme.followersBgColor} border={theme.followersBorderColor}>
                <h4>Followers list</h4>
                {
                  userInfoData.followers.length ? 
                  userInfoData.followers.map(el => <FollowerCard key={el.id} user={el} />) : 
                  <h5>There's no followers for this user</h5>
                }
              </Column> : 
              null
            }
            
            {
              Number(theme.showRepos) ? 
                <Column bgColor={theme.reposBgColor} border={theme.reposBorderColor}>
                  <h4>Repos list</h4>
                  {
                    userInfoData.repos.length ? 
                    userInfoData.repos.map(el => <RepoCard key={el.id} repo={el} />) : 
                    <h5>There's no repos for this user</h5>
                  }
                </Column>
              : null
            }
          </CardContainer>
        </ThemeProvider>
      }
      
    </Suspense>
  )
}

export default Card;