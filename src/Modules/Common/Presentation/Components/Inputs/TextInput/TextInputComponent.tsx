import styles from './styles.module.scss';
import { useState } from 'react';

interface Props {
  type?: string;
  placeholder?: string;
  onChanged: (value: string) => void;
}

const TextInputComponent = (props: Props) => {
  const { placeholder, type } = props;
  const { onChanged } = props;

  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type ?? 'text'}
        value={value ?? undefined}
        onChange={(e) => {
          onChanged(e.target.value);
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TextInputComponent;
