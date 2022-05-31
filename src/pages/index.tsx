import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { useGetLogin } from '../../hooks/realWorldHooks';

const Home: NextPage = () => {
  let id;
  if (typeof window !== 'undefined') {
    id = localStorage.getItem('token');
  }
  const { name } = useGetLogin(id);

  return (
    <>
      <Head>
        <title>Real World Home | TauBoong</title>
      </Head>
      <Wrap>
        <NavBar name={name} />
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div``;
