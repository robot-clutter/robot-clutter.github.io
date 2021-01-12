import { ReactElement } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useTheme } from 'next-themes';

function BibtexBox({ bib }: { bib?: string }): ReactElement {
  const { resolvedTheme } = useTheme();

  const isDarkMode = resolvedTheme === 'dark';

  return (
    <>
      {bib && (
        <>
          <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <h3 className="text-gray-500 dark:text-gray-300">Bibtex</h3>
            <SyntaxHighlighter
              useInlineStyles={false}
              language="latex"
              className="p-0 m-0"
              customStyle={{
                padding: '0 24px',
                margin: 0,
                background: isDarkMode ? '#fff' : '000',
              }}
            >
              {bib}
            </SyntaxHighlighter>
          </div>
        </>
      )}
    </>
  );
}

export default BibtexBox;
