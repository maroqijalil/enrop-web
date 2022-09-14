import { ReactNode } from 'react';
import styles from './styles.module.scss';
import HeaderComponent from '../Header/HeaderComponent';
import FooterComponent from '../Footer/FooterComponent';

interface Props {
  children: ReactNode;
}

const PageComponent = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <HeaderComponent />

      <main>{children}</main>

      <FooterComponent />
    </div>
  );
};

export default PageComponent;
