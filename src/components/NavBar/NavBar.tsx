import React, { FC, useContext, useEffect, useState } from 'react';
import MyLink from './MyLink';
import { getItem } from '../../commons/localStorage';
import { useRouter } from 'next/router';
import { UserContext } from '../../contexts/UserContext';

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
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const [username, setUsername] = useState<string | undefined>();

  useEffect(() => {
    const currentUser = getItem('user');
    const parsed = JSON.parse(currentUser as string);
    if (typeof window !== 'undefined') {
      if (!currentUser) {
        setUsername(undefined);
      }
      if (parsed !== null) {
        setUsername(parsed.username);
      }
    }
  }, [router]);

  return (
    <>
      <nav className="navbar navbar-light">
        <div className="container">
          <MyLink className="navbar-brand" href="/">
            conduit
          </MyLink>
          <ul className="nav navbar-nav pull-xs-right">
            {user ? (
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
                  <MyLink className="nav-link" href="/register">
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
