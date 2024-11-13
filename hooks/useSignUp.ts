import { create } from 'zustand';

const useSignUp = create(set => ({
  isSignUp: false,
  setIsSignUp: (value: boolean) => set({ isSignUp: value }),
}));

export default useSignUp;
