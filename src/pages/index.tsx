import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import { api } from '../../config/api';

type UserType = {
  bio?: null | string | number;
  email?: null | string | number;
  image?: null | string | number;
  token?: null | string | number;
  username: null | string | number;
};

type ServerData = {
  user: UserType;
};

const Home: NextPage = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    (async () => {
      const response = await api.get<ServerData>('/user', {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });
      const data = response.data.user;
      console.log(data.username);
      setName(data.username as string);
    })();
  }, []);

  console.log(1111);

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
