import styles from './styles.module.scss';
import Pattern3 from '../../../Assets/Pattern3';
import LogoIcon from '../../../Assets/LogoIcon';
import FacebookIcon from '../../../Assets/FacebookIcon';
import LinkedInIcon from '../../../Assets/LinkedInIcon';
import TwitterIcon from '../../../Assets/TwitterIcon';

const FooterSectionComponent = () => {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <LogoIcon color={'black'} />

          <div className={styles.title}>
            <h1>Enrop</h1>
            <div />
          </div>
        </div>

        <p className={styles.subtitle}>
          Jl. Moh. Hatta, 002/002, Pisang, Patianrowo,
          <br />
          Nganjuk, Jawa Timur 64391
        </p>
      </div>

      <div className={styles.follow}>
        <h3>Ikuti Kami</h3>

        <div className={styles.icon}>
          <FacebookIcon />
          <LinkedInIcon />
          <TwitterIcon />
        </div>
      </div>

      <img src={new Pattern3().localUrl} />
    </section>
  );
};

export default FooterSectionComponent;
