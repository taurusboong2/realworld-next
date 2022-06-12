import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import { getItem } from '../commons/localStorage';
import { UserContext } from '../contexts/userContext';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<boolean | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localUser = getItem(`user`);
      const isLoggedIn = localUser ? true : false;
      setUser(isLoggedIn);
    }
  }, [user, setUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
