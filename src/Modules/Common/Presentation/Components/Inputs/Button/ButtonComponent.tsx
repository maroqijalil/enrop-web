import styles from "./styles.module.scss";

interface Props {
  text: string;
  onClick: () => void;
  size?: 'MEDIUM' | 'LARGE' | string;
  type?: 'OUTLINED' | 'FILLED' | string;

  padding?: string | undefined;
  height?: string | number | undefined;
  width?: string | number | undefined;
  fontSize?: string | number | undefined;
}

const ButtonComponent = (props: Props) => {
  const {text, onClick, size = 'MEDIUM', type = 'OUTLINED'} = props;
  const {padding, height, width, fontSize} = props;

  return (
    <button
      onClick={onClick}
      className={`
        ${size === "MEDIUM" ? styles.btnMedium : styles.btnLarge}
        ${type === "OUTLINED" ? styles.outlined : ''}
      `}
      style={{width, height, padding, fontSize}}
    >
      {text}
    </button>
  );
}

export default ButtonComponent;
