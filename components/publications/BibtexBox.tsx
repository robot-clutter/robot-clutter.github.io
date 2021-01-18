import { ReactElement } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/oceanicNext';

function BibtexBox({ bib }: { bib?: string }): ReactElement {
  return (
    <>
      {bib && (
        <>
          <div className="mt-5 prose prose-cyan text-gray-500 dark:text-gray-300 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <h3 className="text-gray-500 dark:text-gray-300">Bibtex</h3>
            <Highlight {...defaultProps} code={bib} language="makefile" theme={theme}>
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
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
