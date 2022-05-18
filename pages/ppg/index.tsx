import Head from 'next/head';
import { FC } from 'react';
import MainLayout from '../../components/layouts/MainLayout';
import FIRST_PAPER_DATA from '../../data/publications/ppg';
import PageWithLayoutType from '../../types';
import PublicationAlt from '../../components/publications/PublicationAlt';

const SplitLearningPushGraspingInDenseClutterPage: FC = () => {
  return (
    <>
      <Head>
        <title>{FIRST_PAPER_DATA.title}</title>
      </Head>
      <PublicationAlt {...FIRST_PAPER_DATA} />
    </>
  );
};

(SplitLearningPushGraspingInDenseClutterPage as PageWithLayoutType).layout = MainLayout;

export default SplitLearningPushGraspingInDenseClutterPage;
