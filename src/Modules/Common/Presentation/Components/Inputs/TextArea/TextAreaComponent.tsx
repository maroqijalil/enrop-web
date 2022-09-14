import styles from './styles.module.scss';
import { useState } from 'react';

interface Props {
  placeholder?: string;
  onChanged: (value: string) => void;
}

const TextAreaComponent = (props: Props) => {
  const { onChanged, placeholder } = props;

  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <textarea
        className={styles.input}
        placeholder={placeholder}
        value={value ?? undefined}
        onChange={(e) => {
          onChanged(e.target.value);
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default TextAreaComponent;
