import React, { FC } from 'react';
import Head from 'next/head';

type Props = {
  title: string;
  children?: React.ReactNode;
};

const MyHead: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>TaurusBoong | {title}</title>
    </Head>
  );
};

export default MyHead;
