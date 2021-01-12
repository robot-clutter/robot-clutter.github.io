import { ReactElement } from 'react';
import { CodeIcon, BookIcon, FileAltIcon } from 'react-line-awesome';
import { LinkInterface } from '../../types';

function ButtonLinks({ code }: { code: LinkInterface[] }): ReactElement {
  const iconMap = {
    code: CodeIcon,
    documentation: BookIcon,
    manuscript: FileAltIcon,
  };
  return (
    <div className="prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 -mt-7 lg:-mt-9 mb-3">
      {code.map(
        ({ link, alias, type }: LinkInterface): ReactElement => {
          const Icon = iconMap[type];
          return (
            <a key={alias} href={link} target="_blank" rel="noreferrer">
              <button
                key={alias}
                type="button"
                className="inline-flex items-center px-3 py-2 border mr-4 mt-4 border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <Icon className="text-lg mr-2" />
                {alias}
              </button>
            </a>
          );
        },
      )}
    </div>
  );
}

export default ButtonLinks;
