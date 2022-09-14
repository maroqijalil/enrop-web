import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const PageComponent = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

export default PageComponent;
