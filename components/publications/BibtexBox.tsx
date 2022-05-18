import { ReactElement, useEffect } from 'react';
import { ClipboardListIcon } from 'react-line-awesome';
import useClipboard from 'react-use-clipboard';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';
import { useToasts } from 'react-toast-notifications';

function BibtexBox({ bib }: { bib?: string }): ReactElement {
  const { addToast } = useToasts();
  const [isCopied, setCopied] = useClipboard(bib || '', { successDuration: 1000 });
  useEffect(() => {
    if (isCopied) {
      addToast('Copied to clipboard!', { appearance: 'info', autoDismiss: true });
    }
  }, [isCopied, addToast]);
  return (
    <>
      {bib && (
        <>
          <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <h3 className="text-gray-500 dark:text-gray-300">
              Bibtex
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setCopied();
                }}
                className="ml-2 inline-flex items-center px-3 py-1 border mr-4 mt-4 border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                <ClipboardListIcon className="text-lg" />
              </button>
            </h3>
            <Highlight {...defaultProps} code={bib} language="makefile" theme={theme}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div key={i} {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </>
      )}
    </>
  );
}

export default BibtexBox;
