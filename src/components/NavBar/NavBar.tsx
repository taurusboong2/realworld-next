import React, { FC, useEffect, useState } from 'react';
import MyLink from './MyLink';
import { getItem } from '../../../common/localStorage';

type Props = {
  name?: string | number | string[];
};

const UserNavbar: FC<Props> = ({ name }) => {
  return (
    <>
      <li className="nav-item">
        <MyLink className="nav-link active" href="/">
          Home
        </MyLink>
      </li>
      <li className="nav-item">
        <MyLink className="nav-link" href="/createArticle">
          <i className="ion-compose" />
          &nbsp;New Article
        </MyLink>
      </li>
      <li className="nav-item">
        <MyLink className="nav-link" href="/settings">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </MyLink>
      </li>
      <li className="nav-item">
        <MyLink className="nav-link" href="/proFile">
          {name}
        </MyLink>
      </li>
    </>
  );
};

const NavBar: FC<Props> = () => {
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const currentUser = getItem('user');
    if (!currentUser) return;
    const parsed = JSON.parse(currentUser as string);
    if (typeof window !== 'undefined') {
      setUsername(parsed.username);
    }
    console.log(username);
  }, []);

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <MyLink className="navbar-brand" href="/">
            conduit
          </MyLink>
          <ul className="nav navbar-nav pull-xs-right">
            {username ? (
              <>
                <UserNavbar name={username} />
              </>
            ) : (
              <>
                <li className="nav-item">
                  <MyLink className="nav-link active" href="/">
                    Home
                  </MyLink>
                </li>
                <li className="nav-item">
                  <MyLink className="nav-link" href="/login">
                    Sign in
                  </MyLink>
                </li>
                <li className="nav-item">
                  <MyLink className="nav-link" href="/signUp">
                    Sign Up
                  </MyLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
