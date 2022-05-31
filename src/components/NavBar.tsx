import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import MyLink from './MyLink';

type Props = {
  name?: string | number;
};

const NavBar: NextPage<Props> = ({ name }) => {
  const logOutSubmit = async () => {
    await localStorage.removeItem('token');
  };

  const LogOutBtn = () => {
    return <div onClick={logOutSubmit}>log Out</div>;
  };

  return (
    <Wrap>
      <nav className="navbar navbar-light">
        <div className="container">
          <MyLink className="navbar-brand" href="/">
            conduit
          </MyLink>
          <ul className="nav navbar-nav pull-xs-right">
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
          </ul>
        </div>
      </nav>
    </Wrap>
  );
};

export default NavBar;

const Wrap = styled.div`
  margin: 0;
  nav {
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: space-between;
  }
  nav > ul {
    padding: 4px 16px;
  }
  li {
    display: flex;
    padding: 6px 8px;
  }
  a {
    color: #067df7;
    text-decoration: none;
    font-size: 13px;
  }
`;
