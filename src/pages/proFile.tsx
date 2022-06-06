import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from '../components/MyHead/index';
import UserInfo from '../components/profile/UserInfo';
import Feed from '../components/Home/Feed';
import { getArticleList } from '../../network/request';
import { getItem } from '../../common/localStorage';
import { useGetArticleList } from '../../hooks/realworld.hook';

const ProFile: NextPage = () => {
  const router = useRouter();

  const { userName, articleList, isLoading } = useGetArticleList();

  if (isLoading) return <>로딩중..</>;
  return (
    <>
      <Head title="profile" />
      <div className="profile-page">
        <UserInfo
          userName={userName}
          userBio="this is just tutorial"
          userImage="https://avatars.githubusercontent.com/u/83158335?v=4"
        />

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

              {articleList?.articles.map(e => {
                return (
                  <Feed
                    key={e.slug}
                    author={e.author.username}
                    date={e.createdAt}
                    heart={18}
                    title={e.title}
                    description={e.description}
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

export default ProFile;
