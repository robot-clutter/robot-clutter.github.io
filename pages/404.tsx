import Head from 'next/head';
import Link from 'next/link';
import { FC } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import PageWithLayoutType from '../types';

const NotFoundPage: FC = () => {
  return (
    <>
      <Head>
        <title>Robot Clutter - Page Does Not Exist</title>
      </Head>
      <div className="overflow-y-auto">
        <div className="flex items-center justify-center pt-4 px-4 mt-40 text-center">
          <div className="inline-block bg-gray-50 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <h1 className="text-5xl leading-6 font-2xl text-gray-900 mb-6" id="modal-headline">
                  404
                </h1>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">The page you requested does not exist</p>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <Link href="/">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:text-sm"
                >
                  Back Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

(NotFoundPage as PageWithLayoutType).layout = MainLayout;

export default NotFoundPage;
