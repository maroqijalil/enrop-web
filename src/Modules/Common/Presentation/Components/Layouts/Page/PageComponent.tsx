import { ReactNode } from 'react';
import './styles.module.scss';
import HeaderComponent from '../Header/HeaderComponent';

interface Props {
  children: ReactNode;
}

const PageComponent = ({ children }: Props) => {
  return (
    <>
      <HeaderComponent />

      <main>{children}</main>
    </>
  );
};

export default PageComponent;
