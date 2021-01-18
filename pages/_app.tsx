import { FC, ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { ToastProvider, DefaultToast } from 'react-toast-notifications';
import 'line-awesome/dist/line-awesome/css/line-awesome.min.css';
import PageWithLayoutType from '../types';

import '../global.css';

type AppLayoutProps = {
  Component: PageWithLayoutType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
};

function ToastComponent(props: any): ReactElement {
  return <DefaultToast className="bg-white dark:bg-gray-600 dark:text-gray-100 text-2xl mt-8 mr-8" {...props} />;
}

const App: FC<AppLayoutProps> = ({ Component, pageProps }: AppLayoutProps) => {
  const Layout = Component.layout || ((children: ReactNode) => <>{children}</>);
  return (
    <ThemeProvider attribute="class">
      <ToastProvider
        autoDismiss
        autoDismissTimeout={4000}
        components={{
          Toast: ToastComponent,
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
