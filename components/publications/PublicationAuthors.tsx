import { ReactElement } from 'react';

function PublicationAuthors({ authors }: { authors: string[] }): ReactElement {
  return (
    <div className="prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
      <h3 className="text-gray-500 dark:text-gray-300">Authors</h3>
      {Object.values(authors).map(
        (author: string, key: number): ReactElement => {
          return (
            <span key={author}>
              {key ? ', ' : ''}
              {author}
            </span>
          );
        },
      )}
    </div>
  );
}

export default PublicationAuthors;
