const headerRef = document.getElementsByTagName('header')[0];
const navFixedRef = document.querySelector('nav.fixed');
const burgerIconRef = document.querySelector('#burgerIcon');
const closeIconRef = document.querySelector('#closeIcon');
const menuRef = document.querySelector('div.menu');
const aboutSectionRef = document.querySelector('article.sectionAbout');
const pricingSectionRef = document.querySelector('article.sectionPricing');
const contactSectionRef = document.querySelector('article.sectionContact');

let isMenuOpen;
let scrollYRef;

const setShowNavbar = (state) => {
  if (state) {
    navFixedRef.classList.remove('hidden');
  } else {
    navFixedRef.classList.add('hidden');
  }
};

const setIsMenuOpen = (state) => {
  if (state) {
    menuRef.classList.add('show');
    burgerIconRef.style.display = "none";
    closeIconRef.style.display = "block";
  } else {
    menuRef.classList.remove('show');
    burgerIconRef.style.display = "block";
    closeIconRef.style.display = "none";
  }
};

const changeShowMenu = () => {
  isMenuOpen = !isMenuOpen;
  setIsMenuOpen(isMenuOpen);
};

const scrollToAbout = () => {
  const isScrollUp = window.scrollY > aboutSectionRef.offsetTop;
  window.scrollTo({
    top: aboutSectionRef.offsetTop + (isScrollUp ? -128 : 0),
    behavior: 'smooth'
  });
};

const scrollToPricing = () => {
  const isScrollUp = window.scrollY > pricingSectionRef.offsetTop;
  window.scrollTo({
    top: pricingSectionRef.offsetTop + (isScrollUp ? -128 : 0),
    behavior: 'smooth'
  });
};

const scrollToContact = () => {
  const isScrollUp = window.scrollY > contactSectionRef.offsetTop;
  window.scrollTo({
    top: contactSectionRef.offsetTop + (isScrollUp ? -128 : 0),
    behavior: 'smooth'
  });
};

const validateNavbar = () => {
  if (window.scrollY > (headerRef.offsetHeight)) {
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
    if (window.scrollY < scrollYRef) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
      setIsMenuOpen(false);
    }
  }

  scrollYRef = window.scrollY;
};

window.addEventListener('scroll', onScrollListener);
window.addEventListener('resize', onScrollListener);

const init = () => {
  burgerIconRef.style.display = "block";
  closeIconRef.style.display = "none";
  isMenuOpen = false;
  scrollYRef = window.scrollY;
  validateNavbar();
}

init();
