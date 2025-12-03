// src/stores/useUserStore.ts
import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserStore {
  user: User | null;
  loading: boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
  fetchUser: (id: string) => Promise<void>;
}
export const useUserStore = create<UserStore>(set => ({
  user: null,
  loading: false,
  setUser: user => set({ user }),
  clearUser: () => set({ user: null }),
  fetchUser: async id => {
    set({ loading: true });
    try {
      const user = await fetch(`/api/users/${id}`).then(res => res.json());
      set({ user, loading: false });
    } catch (error) {
      set({ loading: false });
      console.error(error);
    }
  },
}));
