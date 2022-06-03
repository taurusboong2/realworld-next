import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import NavBar from '../components/NavBar';
import { useGetLoginToken } from '../../hooks/realworld.hook';
import MyHead from '../components/MyHead';

const Home: NextPage = () => {
  let id;
  if (typeof window !== 'undefined') {
    id = localStorage.getItem('token');
  }
  const { name } = useGetLoginToken(id);

  return (
    <>
      <MyHead title="Home" />
      <Wrap>
        <NavBar name={name} />
      </Wrap>
    </>
  );
};

export default Home;

const Wrap = styled.div``;
