import styles from './styles.module.scss';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import LogoIcon from '../../../Assets/LogoIcon';
import Pattern1 from '../../../Assets/Pattern1';
import { useSection } from '../../../Contexts/Section/SectionContext';
import { useEffect, useRef, useState } from 'react';
import BurgerIcon from '../../../Assets/BurgerIcon';
import ModalCloseIcon from '../../../Assets/ModalCloseIcon';
import { useMasukModal } from '../../../Contexts/MasukModal/MasukModalContext';

const HeaderComponent = () => {
  const section = useSection();
  const masukModal = useMasukModal();

  const [showNavbar, setShowNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLHtmlElement>(null);
  const scrollYRef = useRef(window.scrollY);

  const menus = ['About', 'Pricing', 'Contact'];

  const validateNavbar = () => {
    if (window.scrollY > (headerRef.current?.offsetHeight ?? 100)) {
      setShowNavbar(true);
      return true;
    }

    if (window.innerWidth > 768) {
      setShowNavbar(false);
      setIsMenuOpen(false);
    } else {
      setShowNavbar(true);
    }

    return false;
  };

  const onScrollListener = () => {
    if (validateNavbar()) {
      if (window.scrollY < scrollYRef.current) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
        setIsMenuOpen(false);
      }
    }

    scrollYRef.current = window.scrollY;
  };

  const getNavComponent = () => (
    <>
      <ul>
        {menus.map((menu, index) => (
          <li
            key={index}
            onClick={() => {
              setIsMenuOpen(false);
              section.scrollTo(menu);
            }}>
            <h1>{menu}</h1>
          </li>
        ))}
      </ul>

      <div className={styles.btn}>
        <ButtonComponent
          text={'Login'}
          onClick={() => {
            setIsMenuOpen(false);
            masukModal.show();
          }}
        />
      </div>
    </>
  );

  useEffect(() => {
    validateNavbar();

    window.addEventListener('scroll', onScrollListener);
    window.addEventListener('resize', onScrollListener);
  }, []);

  return (
    <header ref={headerRef}>
      <div className={styles.logo}>
        <LogoIcon />
        <h1>Home</h1>
      </div>

      <img src={new Pattern1().localUrl} />

      <nav className={styles.static}>{getNavComponent()}</nav>

      <nav className={`${styles.fixed} ${showNavbar ? '' : styles.hidden}`}>
        <div className={styles.menuBtn}>
          <div
            onClick={() => {
              setIsMenuOpen((prevValue) => !prevValue);
            }}>
            {isMenuOpen ? <ModalCloseIcon stroke={'black'} /> : <BurgerIcon color={'black'} />}
          </div>

          <div className={`${styles.menu} ${isMenuOpen ? styles.show : ''}`}>
            {getNavComponent()}
          </div>
        </div>

        <div className={styles.logo}>
          <LogoIcon width={42} height={42} color={'black'} />
          <h1>Enrop</h1>
        </div>

        {getNavComponent()}
      </nav>
    </header>
  );
};

export default HeaderComponent;
