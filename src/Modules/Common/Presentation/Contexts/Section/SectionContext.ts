import { createContext, MutableRefObject, useContext } from 'react';

interface ContextType {
  aboutRef: MutableRefObject<any> | null;
  pricingRef: MutableRefObject<any> | null;
  contactRef: MutableRefObject<any> | null;
  scrollTo: (section: string) => void;
}

const INITIAL_VALUE: ContextType = {
  aboutRef: null,
  pricingRef: null,
  contactRef: null,
  scrollTo: (section) => console.log(section)
};

const SectionContext = createContext(INITIAL_VALUE);
export const useSection = () => useContext(SectionContext);

export default SectionContext;
