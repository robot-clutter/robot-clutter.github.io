import { LayoutInterface } from '../../types';
import ThemeHeader from '../headers/ThemeHeader';

const ThemeLayout: React.FunctionComponent<LayoutInterface> = ({ children }: LayoutInterface) => {
  return (
    <>
      <ThemeHeader />
      {children}
    </>
  );
};

export default ThemeLayout;
