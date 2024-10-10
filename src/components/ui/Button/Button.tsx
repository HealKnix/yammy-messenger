import { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  small?: boolean;
  verySmall?: boolean;
  variant?: 'accent' | 'ghost';
}

const Button: FC<ButtonProps> = ({
  outlined = false,
  small = false,
  verySmall = false,
  variant = 'accent',
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles['custom-button']} ${outlined ? styles.outlined : ''} ${small ? styles.small : ''} ${verySmall ? styles['very-small'] : ''} ${styles[variant]} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
