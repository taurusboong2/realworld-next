import React from 'react';
import { NextPage } from 'next';
import Head from '../components/MyHead/index';
import Banner from '../components/Home/Banner';
import Container from '../components/Home/Container';

const Home: NextPage = () => {
  return (
    <div className="home-page">
      <Head title="Home" />
      <>
        <Banner />
        <Container />
      </>
    </div>
  );
};

export default Home;
