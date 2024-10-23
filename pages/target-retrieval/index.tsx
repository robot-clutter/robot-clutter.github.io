import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import FIRST_PAPER_DATA from '../../data/publications/target-retrieval';
import PageWithLayoutType from '../../types';
import PublicationAlt from '../../components/publications/PublicationAlt';

const TargetRetrievalPage: FC = () => {
  return (
    <>
      <Head>
        <title>{FIRST_PAPER_DATA.title}</title>
      </Head>
      <PublicationAlt {...FIRST_PAPER_DATA} />
    </>
  );
};

(TargetRetrievalPage as PageWithLayoutType).layout = MainLayout;

export default TargetRetrievalPage;
