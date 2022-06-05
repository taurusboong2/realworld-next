import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import Head from '../components/MyHead/index';
import Banner from '../components/Home/Banner';
import Container from '../components/Home/Container';
import { getItem } from '../../common/localStorage';

const Home: NextPage = () => {
  const [userName, setUserName] = useState<string | number | string[] | undefined>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserName(getItem('username') as string);
    }
  }, []);

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
