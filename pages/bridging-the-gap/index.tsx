import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import FIRST_PAPER_DATA from '../../data/publications/bridging-the-gap';
import PageWithLayoutType from '../../types';
import Publication from '../../components/publications/Publication';

const BridgingTheGapPage: FC = () => {
  return (
    <>
      <Head>
        <title>{FIRST_PAPER_DATA.title}</title>
      </Head>
      <Publication {...FIRST_PAPER_DATA} />
    </>
  );
};

(BridgingTheGapPage as PageWithLayoutType).layout = MainLayout;

export default BridgingTheGapPage;
