import { FC } from 'react';

import styles from './PhoneMockup.module.scss';

interface PhoneMockupProps {
  children?: React.ReactNode;
}

const PhoneMockup: FC<PhoneMockupProps> = ({ children }) => {
  return <div className={styles['mobile-mockup']}>{children}</div>;
};

export default PhoneMockup;
