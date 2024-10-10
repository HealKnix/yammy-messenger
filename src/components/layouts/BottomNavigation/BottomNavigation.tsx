import { Compass, Home, MessageCircle, Phone } from 'lucide-react';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import Button from '@/components/ui/Button/Button';

import styles from './BottomNavigation.module.scss';

interface BottomNavigationProps {}

const BottomNavigation: FC<BottomNavigationProps> = () => {
  const location = useLocation();

  return (
    !location.pathname.includes('convo') && (
      <div className={styles['bottom-nav__wrapper']}>
        <nav className={styles['bottom-nav']}>
          <NavLink to={'/home'} tabIndex={-1}>
            <Button variant="ghost">
              <Home
                className={location.pathname === '/home' ? styles.active : ''}
                size={20}
              />
            </Button>
          </NavLink>

          <NavLink to={'/messages'} tabIndex={-1}>
            <Button variant="ghost">
              <MessageCircle
                className={
                  location.pathname === '/messages' ? styles.active : ''
                }
                size={20}
              />
            </Button>
          </NavLink>

          <NavLink to="/calls" tabIndex={-1}>
            <Button variant="ghost">
              <Phone
                className={location.pathname === '/calls' ? styles.active : ''}
                size={20}
              />
            </Button>
          </NavLink>

          <NavLink to={'/explore'} tabIndex={-1}>
            <Button variant="ghost">
              <Compass
                className={
                  location.pathname === '/explore' ? styles.active : ''
                }
                size={20}
              />
            </Button>
          </NavLink>
        </nav>
      </div>
    )
  );
};

export default BottomNavigation;
