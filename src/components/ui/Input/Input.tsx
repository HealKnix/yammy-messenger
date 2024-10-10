import { FC, InputHTMLAttributes } from 'react';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: {
    left?: string | number | readonly string[] | React.ReactNode;
    right?: string | number | readonly string[] | React.ReactNode;
  };
}

const Input: FC<InputProps> = ({ label, ...props }) => {
  return (
    <label>
      <div className={styles['custom-input-wrapper']}>
        {label?.left && (
          <div className={`${styles['divider-content']} ${styles.left}`}>
            {label?.left}
            <div className={styles['vertical-divider']}></div>
          </div>
        )}
        <input className={styles['custom-input']} {...props} />
        {label?.right && (
          <div className={`${styles['divider-content']} ${styles.right}`}>
            <div className={styles['vertical-divider']}></div>
            {label?.right}
          </div>
        )}
      </div>
    </label>
  );
};

export default Input;
