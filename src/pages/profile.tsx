import React from 'react';
import { NextPage } from 'next';
import Head from '../components/myHead/index';
import UserInfo from '../components/profile/UserInfo';
import Feed from '../components/home/Feed';
import { ArticleFeed } from '../types/article';
import { useFetchProfile } from '../hooks/auth.hook';
import { useGetArticleList } from '../hooks/article.hook';

const Profile: NextPage = () => {
  const { isLoading, userData } = useFetchProfile();
  const { articleList } = useGetArticleList();

  if (isLoading) return <>로딩중..</>;
  return (
    <>
      <Head title="profile" />
      <div className="profile-page">
        <UserInfo userName={userData?.username} userBio={userData?.bio} userImage={userData?.image} />

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
                    image={userData?.image}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
