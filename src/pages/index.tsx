import React from 'react';
import { NextPage } from 'next';
import Head from '../components/myHead/index';
import Banner from '../components/home/Banner';
import Container from '../components/home/Container';

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
