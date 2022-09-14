import styles from './styles.module.scss';
import HeaderIcon from '../../../Assets/HeaderIcon';
import Pattern2 from '../../../Assets/Pattern2';

const HeaderSectionComponent = () => {
  return (
    <section className={styles.section}>
      <HeaderIcon />

      <article className={styles.content}>
        <div className={styles.title}>
          <h1>Enrop</h1>
          <div />
        </div>

        <p className={styles.subtitle}>Solusi ERP Perusahaan Anda</p>

        <p className={styles.desc}>
          <strong>1.000.000++</strong> perusahaan telah memakai jasa <strong>Enrop</strong> dalam
          management produk dan profit-nya.
        </p>
      </article>

      <img src={new Pattern2().localUrl} />
    </section>
  );
};

export default HeaderSectionComponent;
