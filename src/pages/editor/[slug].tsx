import React from 'react';
import { NextPage } from 'next';
import Head from '../../components/myHead/index';
import EditorForm from '../../components/EditorForm';

const Editor: NextPage = () => {
  return (
    <>
      <Head title="Editor" />
      <EditorForm isCreatePage={false} />
    </>
  );
};

export default Editor;
