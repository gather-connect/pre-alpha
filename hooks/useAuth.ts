import { create } from 'zustand';

const useAuth = create(set => ({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));

export default useAuth;
