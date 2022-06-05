import React, { useEffect } from 'react';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import { useRouter } from 'next/router';
import Head from '../components/MyHead/index';
import UserInfo from '../components/profile/userInfo';
import Feed from '../components/Home/Feed';
import { getUserProfile } from '../../network/request';
import { getItem } from '../../common/localStorage';

const ProFile: NextPage = () => {
  const router = useRouter();

  let userName, token;
  if (typeof window !== 'undefined') {
    userName = getItem('username');
    token = localStorage.getItem('token');
  }

  useEffect(() => {
    (async () => {
      if (!userName) return;
      await getUserProfile(userName, token).then(res => {
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
