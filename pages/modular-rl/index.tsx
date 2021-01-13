import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import FIRST_PAPER_DATA from '../../data/publications/modular-rl';
import PageWithLayoutType from '../../types';
import Publication from '../../components/publications/Publication';

const TotalSingulationPage: FC = () => {
  return (
    <>
      <Head>
        <title>{FIRST_PAPER_DATA.title}</title>
      </Head>
      <Publication {...FIRST_PAPER_DATA} />
    </>
  );
};

(TotalSingulationPage as PageWithLayoutType).layout = MainLayout;

export default TotalSingulationPage;
