import React, { FC } from 'react';
import MyLink from './MyLink';

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
        <MyLink className="nav-link" href={{ pathname: '/createArticle', query: { user: name } }}>
          <i className="ion-compose" />
          &nbsp;New Article
        </MyLink>
      </li>
      <li className="nav-item">
        <MyLink className="nav-link" href="">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </MyLink>
      </li>
      <li className="nav-item">
        <MyLink className="nav-link" href={{ pathname: '/proFile', query: { user: name } }}>
          {name}
        </MyLink>
      </li>
    </>
  );
};

const NavBar: FC<Props> = ({ name }) => {
  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <MyLink className="navbar-brand" href="/">
            conduit
          </MyLink>
          <ul className="nav navbar-nav pull-xs-right">
            {name ? (
              <UserNavbar name={name} />
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
