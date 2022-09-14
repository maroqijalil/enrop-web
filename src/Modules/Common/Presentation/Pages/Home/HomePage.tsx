import PageComponent from '../../Components/Layouts/Page/PageComponent';
import HeaderSectionComponent from '../../Components/Sections/Header/HeaderSectionComponent';
import styles from './styles.module.scss';
import AboutSectionComponent from '../../Components/Sections/About/AboutSectionComponent';
import ServiceSectionComponent from '../../Components/Sections/Service/ServiceSectionComponent';

const HomePage = () => (
  <PageComponent>
    <div className={styles.page}>
      <HeaderSectionComponent />

      <div>
        <AboutSectionComponent />

        <ServiceSectionComponent />
      </div>
    </div>
  </PageComponent>
);

export default HomePage;
