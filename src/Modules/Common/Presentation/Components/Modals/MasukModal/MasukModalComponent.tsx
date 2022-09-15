import ModalComponent from '../Modal/ModalComponent';

interface Props {
  isShown: boolean;
  onClose: () => void;
}

const MasukModalComponent = (props: Props) => {
  const { isShown } = props;

  return (
    <ModalComponent isShown={isShown}>
      <div>

      </div>
    </ModalComponent>
  );
}

export default MasukModalComponent;
