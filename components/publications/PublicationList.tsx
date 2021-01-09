import { ReactElement } from 'react';
import { PublicationInterface } from '../../types';
import PublicationCard from './PublicationCard';

function PublicationList({ data }: { data: PublicationInterface[] }): ReactElement {
  return (
    <div className="relative pt-10 pb-20 px-4 sm:px-6 lg:pt-14 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-gray-50 dark:bg-gray-900 h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-300 sm:text-4xl">
            Publications
          </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {data.map((pub: PublicationInterface) => {
            return <PublicationCard key={pub.slug} {...pub} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PublicationList;
