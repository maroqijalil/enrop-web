import { createContext, useContext } from 'react';

interface ContextType {
  show: () => void;
  hide: () => void;
}

const INITIAL_VALUE: ContextType = {
  show: () => {console.log("Show modal")},
  hide: () => {console.log("Hide modal")}
};

const MasukModalContext = createContext(INITIAL_VALUE);
export const useMasukModal = () => useContext(MasukModalContext);

export default MasukModalContext;
