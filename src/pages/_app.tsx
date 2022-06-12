import React, { useEffect, useState } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import { UserContext } from '../contexts/userContext';
import { getItem } from '../commons/localStorage';

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const localUser = getItem(`user`);
      setUser(localUser ? true : false);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContext.Provider>
  );
}

export default MyApp;
