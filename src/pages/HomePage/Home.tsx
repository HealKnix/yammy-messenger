import { motion } from 'framer-motion';
import { Bell, Search } from 'lucide-react';
import { FC } from 'react';

import Button from '@/components/ui/Button/Button';
import Post from '@/components/ui/Post/Post';
import { useAuthStore } from '@/store/useAuthStore';

import styles from './Home.module.scss';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const authStore = useAuthStore();

  return (
    <motion.div
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
      <header className={styles.header}>
        <Button variant="ghost">
          <Search size={20} />
        </Button>
        <Button variant="ghost">
          <Bell size={20} />
        </Button>
      </header>
      <main className={styles.main}>
        <h2>Hola, {authStore.user?.first_name}!</h2>

        <div className={styles.histories__wrapper}>
          <div className={styles.history}>
            <img src="" alt="" className={styles['history-img']} />
            <span className={`description-1`}>Add</span>
          </div>

          <div className={styles.history}>
            <img src="" alt="" className={styles['history-img']} />
            <span className={`description-1`}>Mike West</span>
          </div>

          <div className={styles.history}>
            <img src="" alt="" className={styles['history-img']} />
            <span className={`description-1`}>Thomas</span>
          </div>

          <div className={styles.history}>
            <img src="" alt="" className={styles['history-img']} />
            <span className={`description-1`}>Jane Barber</span>
          </div>

          <div className={styles.history}>
            <img src="" alt="" className={styles['history-img']} />
            <span className={`description-1`}>Victor Babue</span>
          </div>
        </div>

        <div className={styles['posts__wrapper']}>
          <Post />
          <Post />
          <Post />
        </div>
      </main>
    </motion.div>
  );
};

export default Home;
