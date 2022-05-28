import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real World Home | TauBoong</title>
      </Head>
      <Wrap>
        <NavBar />
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div``;
