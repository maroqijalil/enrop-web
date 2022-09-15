import { ReactNode } from "react";
import styles from './styles.module.scss';

interface Props {
  children: ReactNode;
  isShown: boolean;
}

const ModalComponent = (props: Props) => {
  const { children, isShown } = props;

  return (
    <div className={`${isShown ? '' : styles.gone }`}>
      <div className={styles.background}>
        <div className={styles.modal}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
