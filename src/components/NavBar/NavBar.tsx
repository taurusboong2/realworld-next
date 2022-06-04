import React, { FC } from 'react';
import MyLink from './MyLink';

type Props = {
  name?: string | number;
};

const LogOutBtn = () => {
  const logOutSubmit = async () => {
    await localStorage.removeItem('token');
  };

  return <div onClick={logOutSubmit}>log Out</div>;
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
        <a className="nav-link" href="">
          <i className="ion-compose" />
          &nbsp;New Article
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">
          <i className="ion-gear-a" />
          &nbsp;Settings
        </a>
      </li>
      <li className="nav-item">
        <MyLink className="nav-link" href="/login">
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
                    {name ? name : 'Sign in'}
                  </MyLink>
                </li>
                <li className="nav-item">
                  <MyLink className="nav-link" href="/signUp">
                    {name ? <LogOutBtn /> : 'Sign Up'}
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
