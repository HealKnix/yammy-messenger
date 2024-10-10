import { motion } from 'framer-motion';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button/Button';

import styles from './Auth.module.scss';

const Auth: FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles['auth-wrapper']}
      initial={{ x: '-100%' }}
      animate={{
        x: 0,
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        x: '-100%',
        transition: {
          duration: 0.1,
        },
      }}
    >
      <center className={styles['hero-text']}>
        <h1>Hi there !</h1>

        <span className={`subtitle-1 ${styles['subtitle-1']}`}>
          Welcome to Chat App v2.0, <br /> Free messaging, voice and video
          calls, and more!
        </span>
      </center>

      <center className={styles.footer}>
        <div className={styles.buttons}>
          <Button outlined onClick={() => navigate('/sign-up')}>
            Sign Up
          </Button>
          <Button>Login</Button>
        </div>

        <span className={`description-2 ${styles['description-2']}`}>
          ©2024 - App Chat V2.0
        </span>
      </center>
    </motion.div>
  );
};

export default Auth;
