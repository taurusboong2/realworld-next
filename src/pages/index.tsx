import React from 'react';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import Head from '../components/MyHead/index';
import Banner from '../components/Home/Banner';
import Container from '../components/Home/Container';
import { getItem } from '../../common/localStorage';

const Home: NextPage = () => {
  let userName;
  if (typeof window !== 'undefined') {
    userName = getItem('username');
  }

  return (
    <div className="home-page">
      <Head title="Home" />
      <>
        <NavBar name={userName} />
        <Banner />
        <Container />
      </>
    </div>
  );
};

export default Home;
