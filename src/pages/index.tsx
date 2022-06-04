import React from 'react';
import styled from 'styled-components';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import { useGetLoginToken } from '../../hooks/realworld.hook';
import Head from '../components/MyHead/index';
import Banner from '../components/Home/Banner';
import Container from '../components/Home/Container';

const Home: NextPage = () => {
  let id;
  if (typeof window !== 'undefined') {
    id = localStorage.getItem('token');
  }
  const { name } = useGetLoginToken(id);

  return (
    <div className="home-page">
      <Head title="Home" />
      <Wrap>
        <NavBar name={name} />
        <Banner />
        <Container />
      </Wrap>
    </div>
  );
};

export default Home;

const Wrap = styled.div``;
