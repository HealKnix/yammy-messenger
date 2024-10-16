import { motion } from 'framer-motion';
import { BookUser, Edit } from 'lucide-react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button/Button';
import Search from '@/components/ui/Search/Search';

import styles from './Messages.module.scss';

interface MessagesProps {}

const Messages: FC<MessagesProps> = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{
        x: '100%',
      }}
      animate={{
        x: 0,
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        x: '100%',
        transition: {
          duration: 0.1,
        },
      }}
    >
      <header className={styles.header}>
        <h3>Messages</h3>
        <div className={styles['edit-book-user']}>
          <Button variant="ghost">
            <Edit strokeWidth={1.5} stroke="var(--accent-color)" />
          </Button>
          <Button variant="ghost">
            <BookUser strokeWidth={1.5} stroke="var(--accent-color)" />
          </Button>
        </div>
      </header>

      <main className={styles.main}>
        <Search placeholder="Search..." />

        <div className={styles.messages__wrapper}>
          <button
            className={styles['message']}
            onClick={() => navigate('convo/1')}
          >
            <div className={styles['message-user']}>
              <div
                className={`${styles['message-user-avatar']} ${styles.online}`}
              >
                <img src="" alt="" width={'100%'} height={'100%'} />
              </div>
              <div className={styles['message-user-info']}>
                <span className="body-text-1">Ngoc Anh</span>
                <span className="body-text-2">Honie! I miss you</span>
              </div>
            </div>
            <div className={styles['message-info']}>
              <span
                className="description-1"
                style={{ color: 'var(--gray-color)' }}
              >
                05:15 PM
              </span>
              <span className="description-1">+2</span>
            </div>
          </button>

          <button
            className={styles['message']}
            onClick={() => navigate('convo/2')}
          >
            <div className={styles['message-user']}>
              <div
                className={`${styles['message-user-avatar']} ${styles['do-not-disturb']}`}
              >
                <img src="" alt="" width={'100%'} height={'100%'} />
              </div>
              <div className={styles['message-user-info']}>
                <span className="body-text-1">Ralph Estrada</span>
                <span className="body-text-2">Ok! sure</span>
              </div>
            </div>

            <div className={styles['message-info']}>
              <span
                className="description-1"
                style={{ color: 'var(--gray-color)' }}
              >
                09:02 AM
              </span>
              <span className="description-1">1</span>
            </div>
          </button>

          <button
            className={styles['message']}
            onClick={() => navigate('convo/3')}
          >
            <div className={styles['message-user']}>
              <div
                className={`${styles['message-user-avatar']} ${styles['not-active']}`}
              >
                <img src="" alt="" width={'100%'} height={'100%'} />
              </div>
              <div className={styles['message-user-info']}>
                <span className="body-text-1">Alan Simmons</span>
                <span className="body-text-2">
                  I sent you an email about this
                </span>
              </div>
            </div>

            <div className={styles['message-info']}>
              <span
                className="description-1"
                style={{ color: 'var(--gray-color)' }}
              >
                07:56 AM
              </span>
              <span className="description-1"></span>
            </div>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default Messages;
