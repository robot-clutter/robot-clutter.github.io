import { ReactElement } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

function BibtexBox({ bib }: { bib?: string }): ReactElement {
  return (
    <>
      {bib && (
        <>
          <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <h3 className="text-gray-500 dark:text-gray-300">Bibtex</h3>
            <SyntaxHighlighter language="latex" className="text-base bg-white">
              {bib}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </>
  );
}

export default BibtexBox;
