import { api } from '@/api';
import { useAuthStore } from '@/store/useAuthStore';
import { useQuery } from '@tanstack/react-query';

export const useInitializeAuth = () => {
  const authStore = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: () =>
      api.auth().then((res) => {
        if (res) {
          authStore.setUser(res);
        }
        return res;
      }),
  });

  return {
    isAuthenticated: authStore.isAuth(),
    isLoading: isLoading,
  };
};
