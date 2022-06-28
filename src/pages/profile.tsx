import React from 'react';
import { NextPage } from 'next';
import Head from '../components/MyHead/index';
import UserInfo from '../components/profile/UserInfo';
import Feed from '../components/common/Feed';
import { ArticleFeed } from '../types/article';
import { useUserContext } from '../hooks/auth.hook';
import { useGetArticleList } from '../hooks/article.hook';
import WithLogin from '../components/Auth/WithLogin';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Profile: NextPage = () => {
  const { loadingStatus, user } = useUserContext();
  const { articleList } = useGetArticleList();

  if (loadingStatus === 'loading') return <LoadingSpinner />;
  return (
    <WithLogin>
      <Head title="profile" />
      <div className="profile-page">
        <UserInfo userName={user?.username} userBio={user?.bio} userImage={user?.image || undefined} />

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 offset-md-1">
              <div className="articles-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      My Articles
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Favorited Articles
                    </a>
                  </li>
                </ul>
              </div>

              {articleList?.articles.map((e: ArticleFeed) => {
                return (
                  <Feed
                    key={e.slug}
                    author={e.author.username}
                    date={e.createdAt}
                    heart={e.favoritesCount}
                    title={e.title}
                    description={e.description}
                    slug={e.slug}
                    image={user?.image || undefined}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </WithLogin>
  );
};

export default Profile;
