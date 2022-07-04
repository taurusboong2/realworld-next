import React from 'react';
import { NextPage } from 'next';
import Head from '../../components/MyHead';
import EditorForm from '../../components/Editor/EditorForm';

const Editor: NextPage = () => {
  return (
    <>
      <Head title="Editor" />
      <EditorForm isCreatePage={false} />
    </>
  );
};

export default Editor;
