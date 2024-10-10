import { create } from 'zustand';

import { User } from '@/models/User';

import { userList } from '../models/mock/user';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuth: () => boolean;
}

export const useAuthStore = create<AuthState>()((set, state) => ({
  user: userList[3],
  setUser: (user) => set({ user }),
  isAuth: () => Boolean(state().user),
}));
