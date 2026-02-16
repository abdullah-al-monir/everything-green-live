import { create } from 'zustand';
import { User } from '@/types';
import Cookie from 'js-cookie';

interface AuthStore {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  isAuthenticated: false,

  setUser: (user) => set({ 
    user, 
    isAuthenticated: user !== null
  }),

  setLoading: (loading) => set({ isLoading: loading }),

  logout: () => {
    Cookie.remove('authToken');
    set({ user: null, isAuthenticated: false });
  },

  initialize: () => {
    const token = Cookie.get('authToken');
    if (token) {
      set({ isAuthenticated: true });
    }
  },
}));