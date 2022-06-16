import React from 'react';
import { NextPage } from 'next';
import Head from '../components/myHead/index';
import EditorForm from '../components/EditorForm';

const CreateArticle: NextPage = () => {
  return (
    <>
      <Head title="Create" />
      <EditorForm isCreatePage={true} />
    </>
  );
};

export default CreateArticle;
