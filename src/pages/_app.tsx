import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/common/Layout';
import { LoginUserContextProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginUserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LoginUserContextProvider>
  );
}

export default MyApp;
