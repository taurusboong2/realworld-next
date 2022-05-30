import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import api from '../../config/api';

// 타입 제대로 쓰고 type 은 다른 파일로 분리
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

const SEO: React.FC<{ title: string }> = props => {
  const { title } = props;
  {
    /* 이렇게 별도의 컴포넌트로 분리할 생각하기 */
  }

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};

const Home: NextPage = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    // 별도의 훅으로 분리하기
    (async () => {
      const response = await api.get<ServerData>('/user', {
        // network 함수로 다 분리하기
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
      });
      const data = response.data.user;
      console.log(data.username);
      setName(data.username as string);
    })();
  }, []);

  return (
    <>
      <SEO title="asdfadfasdfasdf" />
      <Wrap>
        <NavBar name={name} />
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div``;
