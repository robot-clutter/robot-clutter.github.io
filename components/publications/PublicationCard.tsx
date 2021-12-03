import Link from 'next/link';
import { ReactElement } from 'react';
import { PublicationInterface } from '../../types';

function PublicationCard({ title, year, journal_small, abstract, slug, image }: PublicationInterface): ReactElement {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <Link href={`/${slug}`}>
          <img
            className="h-48 w-full object-cover cursor-pointer"
            src={image.src === 'PUBLIC_FOLDER' ? `/${image.path}` : image.path}
            alt=""
          />
        </Link>
      </div>
      <div className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-300 text-left">
              <Link href={`/${slug}`}>{title}</Link>
            </p>
            <p className="mt-1 text-base font-semibold text-gray-500 dark:text-gray-400 text-left">{journal_small + " " + year}</p>
            <p className="mt-3 text-base text-gray-500 dark:text-gray-400 text-left truncate">{abstract}</p>
          </div>
          <p className="text-left mt-6 font-medium text-cyan-600 dark:text-cyan-500 hover:underline">
            <Link href={`/${slug}`}>Read More</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;
