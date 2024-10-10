import { AnimatePresence } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import BgLogo from '@/assets/bg-logo.svg';

import styles from './App.module.scss';
import BottomNavigation from './components/layouts/BottomNavigation/BottomNavigation';
import { useInitializeAuth } from './hooks/useInitializeAuth';
import Auth from './pages/AuthPage/Auth';
import SignUp from './pages/AuthPage/SignUpPage/SignUp';
import Home from './pages/HomePage/Home';
import Conversation from './pages/MessagesPage/ConversationPage/Conversation';
import Messages from './pages/MessagesPage/Messages';

function App() {
  const { isAuthenticated, isLoading } = useInitializeAuth();
  const location = useLocation();

  const unAuthorized = (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Auth />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );

  const authorized = (
    <div className={styles.main__wrapper}>
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/convo/:conv_id" element={<Conversation />} />
        {/* <Route path="/calls" element={<Messages />} />
          <Route path="/explore" element={<Messages />} /> */}
        <Route path="*" element={<Navigate to={'/home'} />} />
      </Routes>
      <BottomNavigation />
    </div>
  );

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <img className={styles['bg-logo-loader']} src={BgLogo} alt="logo" />
      )}
      {!isLoading && (isAuthenticated ? authorized : unAuthorized)}
    </AnimatePresence>
  );
}

export default App;
