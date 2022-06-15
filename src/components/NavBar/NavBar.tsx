import React, { FC } from 'react';
import MyLink from './MyLink';
import { useUserContext } from '../../hooks/auth.hook';

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
        <MyLink className="nav-link" href="/editor">
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
        <MyLink className="nav-link" href="/profile">
          {name}
        </MyLink>
      </li>
    </>
  );
};

const NavBar: FC<Props> = () => {
  const { user: userData, loadingStatus } = useUserContext();

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <MyLink className="navbar-brand" href="/">
            conduit
          </MyLink>
          {loadingStatus === 'done' && (
            <ul className="nav navbar-nav pull-xs-right">
              {userData ? (
                <>
                  <UserNavbar name={userData.user.username} />
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
                    <MyLink className="nav-link" href="/register">
                      Sign Up
                    </MyLink>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
