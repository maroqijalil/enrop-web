import { Helmet } from 'react-helmet';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  title?: string;
  path: string;
}

const HeadComponent = ({ title, path, children }: Props) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />

      <title>
        {title ? `${title} |` : ''} {process.env.REACT_APP_NAME}
      </title>

      <link rel="canonical" href={`${process.env.REACT_APP_URL}${path}`} />
    </Helmet>

    {children}
  </>
);

export default HeadComponent;
