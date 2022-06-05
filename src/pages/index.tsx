import React, { useEffect } from 'react';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import { useGetLoginToken } from '../../hooks/realworld.hook';
import Head from '../components/MyHead/index';
import Banner from '../components/Home/Banner';
import Container from '../components/Home/Container';
import { getFeedsArticles } from '../../network/request';

const Home: NextPage = () => {
  let token;
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }
  const { name } = useGetLoginToken(token);

  useEffect(() => {
    getFeedsArticles(token);
  }, []);

  return (
    <div className="home-page">
      <Head title="Home" />
      <>
        <NavBar name={name} />
        <Banner />
        <Container />
      </>
    </div>
  );
};

export default Home;
