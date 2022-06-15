import React, { FC, Fragment } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <NavBar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
