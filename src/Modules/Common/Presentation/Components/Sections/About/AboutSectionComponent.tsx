import styles from './styles.module.scss';
import AboutIcon from '../../../Assets/AboutIcon';

const AboutSectionComponent = () => {
  return (
    <section className={styles.section}>
      <h2>Penyedia Jasa Platform ERP Terpercaya Sejak 2009</h2>

      <article className={styles.content}>
        <div className={styles.desc}>
          <p>
            <strong>Enrop</strong> hadir untuk <strong>meng-otomasi dan meng-integrasikan</strong>{' '}
            proses-proses bisnis perusahaan Anda.
          </p>

          <p>
            Kami mem-fasilitasi sharing/berbagai data, berbagai aliran informasi, dan
            mengenalkan/menyalurkan praktik-praktik bisnis yang umum{' '}
            <strong>diantara semua pengguna</strong> dalam perusahaan Anda.
          </p>
        </div>

        <div className={styles.img}>
          <AboutIcon />
        </div>
      </article>

      <div className={styles.bg}/>
    </section>
  );
};

export default AboutSectionComponent;
