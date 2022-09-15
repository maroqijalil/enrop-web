import { ReactNode, RefObject, useRef } from 'react';
import SectionContext from './SectionContext';

const SectionProvider = ({ children }: { children: ReactNode }) => {
  const aboutRef = useRef<HTMLHtmlElement>(null);
  const pricingRef = useRef<HTMLHtmlElement>(null);
  const contactRef = useRef<HTMLHtmlElement>(null);

  const windowScrollTo = (e: RefObject<HTMLHtmlElement>) => {
    if (e.current) {
      const isScrollUp = window.scrollY > e.current?.offsetTop;
      window.scrollTo({
        top: e.current.offsetTop + (isScrollUp ? -128 : 0),
        behavior: 'smooth'
      });
    }
  };

  const scrollTo = (section: string | 'About' | 'Pricing' | 'Contact') => {
    if (section === 'About') {
      windowScrollTo(aboutRef);
    } else if (section === 'Pricing') {
      windowScrollTo(pricingRef);
    } else if (section === 'Contact') {
      windowScrollTo(contactRef);
    }
  };

  return (
    <SectionContext.Provider value={{ aboutRef, pricingRef, contactRef, scrollTo }}>
      {children}
    </SectionContext.Provider>
  );
};

export default SectionProvider;
