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

  const [userName, setUserName] = useState<string | string[] | undefined>('');
  const [token, setToken] = useState<string>('');

  const { isLoading, fetchArticleList } = useGetArticleList();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUser = getItem('user');
      const parsed = JSON.parse(currentUser as string);
      setUserName(parsed.username);
      setToken(parsed.token);
    }
    (async () => {
      await fetchArticleList(token).then(res => {
        console.log(res);
      });
    })();
  }, []);

  return (
    <>
      <Head title="profile" />
      {/* <NavBar name={userName} /> */}
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

              <Feed author="붕붕" date="may 5" heart={20} title="1" description="안녕하세요" />

              <Feed author="붕붕" date="may 5" heart={20} title="2" description="안녕하세요2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProFile;
