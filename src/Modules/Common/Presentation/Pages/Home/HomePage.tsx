import PageComponent from '../../Components/Layouts/Page/PageComponent';
import HeaderSectionComponent from '../../Components/Sections/Header/HeaderSectionComponent';
import styles from './styles.module.scss';
import AboutSectionComponent from '../../Components/Sections/About/AboutSectionComponent';

const HomePage = () => (
  <PageComponent>
    <div className={styles.page}>
      <HeaderSectionComponent />

      <AboutSectionComponent />
    </div>
  </PageComponent>
);

export default HomePage;
