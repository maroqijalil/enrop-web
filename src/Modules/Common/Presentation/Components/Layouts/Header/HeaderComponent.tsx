import styles from './styles.module.scss';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import LogoIcon from '../../../Assets/LogoIcon';
import Pattern1 from '../../../Assets/Pattern1';
import { useSection } from '../../../Contexts/Section/SectionContext';

const HeaderComponent = () => {
  const section = useSection();

  const menus = ['About', 'Pricing', 'Contact'];

  return (
    <header>
      <div className={styles.logo}>
        <LogoIcon />
        <h1>Home</h1>

        <img src={new Pattern1().localUrl} />
      </div>

      <nav>
        <ul>
          {menus.map((menu, index) => (
            <li key={index} onClick={() => {
              section.scrollTo(menu);
            }}>
              <h1>{menu}</h1>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.btn}>
        <ButtonComponent
          text={'Login'}
          onClick={() => {
            console.log('Login');
          }}
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
