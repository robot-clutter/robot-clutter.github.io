import { ReactElement } from 'react';
import { AUTHORS, AUTHOR_DATA } from '../../data/authors';

function PublicationAuthors({ authors, label }: { authors: AUTHORS[]; label?: boolean }): ReactElement {
  return (
    <div className=" prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
      {label ? <h3 className="text-gray-500 dark:text-gray-300">Authors</h3> : <div className="h-8" />}
      {authors.map((author: AUTHORS, key: number): ReactElement => {
        const { first_name, last_name, url } = AUTHOR_DATA[author];
        if (url) {
          return (
            <span key={author}>
              {key ? ', ' : ''}
              <a href={url} target="_blank" rel="noreferrer">
                {`${first_name} ${last_name}`}
              </a>
            </span>
          );
        }
        return (
          <span key={author}>
            {key ? ', ' : ''}
            {`${first_name} ${last_name}`}
          </span>
        );
      })}
    </div>
  );
}

export default PublicationAuthors;
