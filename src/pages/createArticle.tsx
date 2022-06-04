import React from 'react';
import { NextPage } from 'next';
import NavBar from '../components/NavBar/NavBar';
import ArticleInput from '../components/Input/ArticleInput';
import { useRouter } from 'next/router';

const CreateArticle: NextPage = () => {
  const router = useRouter();
  const { user: name } = router.query;

  return (
    <>
      <NavBar name={name} />
      <ArticleInput />
    </>
  );
};

export default CreateArticle;
