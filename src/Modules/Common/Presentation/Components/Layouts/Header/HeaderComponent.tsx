import styles from './styles.module.scss';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import LogoIcon from '../../../Assets/LogoIcon';
import Pattern1 from '../../../Assets/Pattern1';
import { useSection } from '../../../Contexts/Section/SectionContext';
import { useEffect, useRef, useState } from 'react';

const HeaderComponent = () => {
  const section = useSection();

  const [showNavbar, setShowNavbar] = useState(false);

  const headerRef = useRef<HTMLHtmlElement>(null);

  const menus = ['About', 'Pricing', 'Contact'];

  const validateNavbar = () => {
    if (window.scrollY > (headerRef.current?.offsetHeight ?? 100)) {
      setShowNavbar(true);
      return true;
    } else {
      setShowNavbar(false);
      return false;
    }
  };

  let prevScrollY = window.scrollY;
  const onScrollListener = () => {
    if (validateNavbar()) {
      setShowNavbar(window.scrollY < prevScrollY);
    }
    prevScrollY = window.scrollY;
  };

  window.addEventListener('scroll', onScrollListener);

  useEffect(() => {
    validateNavbar();
  }, [headerRef]);

  return (
    <header ref={headerRef}>
      <div className={styles.logo}>
        <LogoIcon />
        <h1>Home</h1>

        <img src={new Pattern1().localUrl} />
      </div>

      <nav className={styles.static}>
        <ul>
          {menus.map((menu, index) => (
            <li
              key={index}
              onClick={() => {
                section.scrollTo(menu);
              }}>
              <h1>{menu}</h1>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <ButtonComponent
          text={'Login'}
          onClick={() => {
            console.log('Login');
          }}
        />
      </div>

      <nav className={`${styles.fixed} ${showNavbar ? '' : styles.hidden}`}>
        <div className={styles.logo}>
          <LogoIcon width={42} height={42} color={'black'} />
          <h1>Enrop</h1>
        </div>

        <ul>
          {menus.map((menu, index) => (
            <li
              key={index}
              onClick={() => {
                section.scrollTo(menu);
              }}>
              <h1>{menu}</h1>
            </li>
          ))}
        </ul>

        <div>
          <ButtonComponent
            text={'Login'}
            onClick={() => {
              console.log('Login');
            }}
          />
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
