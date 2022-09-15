import React, { ReactNode, useState } from 'react';
import MasukModalContext from './MasukModalContext';
import MasukModalComponent from '../../Components/Modals/MasukModal/MasukModalComponent';

const MasukModalProvider = ({ children }: { children: ReactNode }) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <MasukModalContext.Provider
      value={{
        show: () => {
          setIsShown(true);
        },
        hide: () => {
          setIsShown(false);
        }
      }}>
      {children}

      <MasukModalComponent
        isShown={isShown}
        onClose={() => {
          setIsShown(false);
        }}
      />
    </MasukModalContext.Provider>
  );
};

export default MasukModalProvider;
