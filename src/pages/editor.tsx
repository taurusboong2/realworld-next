import React from 'react';
import { NextPage } from 'next';
import Head from '../components/MyHead';
import EditorForm from '../components/Editor/EditorForm';

const CreateArticle: NextPage = () => {
  return (
    <>
      <Head title="Create" />
      <EditorForm isCreatePage={true} />
    </>
  );
};

export default CreateArticle;
