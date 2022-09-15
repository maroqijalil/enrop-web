import ModalComponent from '../Modal/ModalComponent';
import styles from './styles.module.scss';
import ButtonComponent from '../../Inputs/Button/ButtonComponent';
import ModalCloseIcon from '../../../Assets/ModalCloseIcon';
import TextInputComponent from '../../Inputs/TextInput/TextInputComponent';

interface Props {
  isShown: boolean;
  onClose: () => void;
}

const MasukModalComponent = (props: Props) => {
  const { isShown, onClose } = props;

  return (
    <ModalComponent isShown={isShown}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.top}>
            <h3>Login</h3>

            <div className={styles.btn} onClick={onClose}>
              <ModalCloseIcon stroke={'black'} />
            </div>
          </div>
          <p>Masuk untuk mencari lebih dalam tentang tranksaksi di Enrop</p>
        </div>

        <div className={styles.cardContent}>
          <TextInputComponent
            placeholder={'Email'}
            onChanged={(str) => {
              console.log(str);
            }}
          />

          <TextInputComponent
            placeholder={'Password'}
            type={'password'}
            onChanged={(str) => {
              console.log(str);
            }}
          />
        </div>

        <ButtonComponent
          text={'Login'}
          size={'LARGE'}
          type={'FILLED'}
          width={'100%'}
          onClick={() => {
            console.log('Login');
          }}
        />
      </div>
    </ModalComponent>
  );
};

export default MasukModalComponent;
