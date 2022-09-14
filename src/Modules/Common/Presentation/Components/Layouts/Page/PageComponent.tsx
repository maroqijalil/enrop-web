import { ReactNode } from 'react';
import './styles.module.scss';
import HeaderComponent from '../Header/HeaderComponent';
import FooterComponent from '../Footer/FooterComponent';

interface Props {
  children: ReactNode;
}

const PageComponent = ({ children }: Props) => {
  return (
    <>
      <HeaderComponent />

      <main>{children}</main>

      <FooterComponent />
    </>
  );
};

export default PageComponent;
