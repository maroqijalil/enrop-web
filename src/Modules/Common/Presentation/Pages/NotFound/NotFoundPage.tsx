import PageComponent from '../../Components/Layouts/Page/PageComponent';
import styles from './styles.module.scss';

const NotFoundPage = () => (
  <PageComponent>
    <div className={styles.page}>
      <h1>Sorry, not found</h1>
    </div>
  </PageComponent>
);

export default NotFoundPage;
