import { LayoutInterface } from '../../types';

import MainHeader from '../headers/MainHeader';

const MainLayout: React.FunctionComponent<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
};

export default MainLayout;
