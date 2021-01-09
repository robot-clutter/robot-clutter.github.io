import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PublicationList from '../components/publications/PublicationList';
import publications from '../data/publications/index';
import PageWithLayoutType from '../types';

const IndexPage: FC = () => {
  return (
    <>
      <div className="text-center">
        <Head>
          <title>Robot Clutter</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <PublicationList data={publications} />
      </div>
    </>
  );
};

(IndexPage as PageWithLayoutType).layout = MainLayout;

export default IndexPage;
