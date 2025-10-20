import type { User } from "@/types";
import { create } from "zustand";

interface UserStore {
  user: User | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
}

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const useUserStore = create<UserStore>((set) => ({
  ...initialState,

  setUser: (user) => set({ user }),

  setLoading: (isLoading) => set({ isLoading }),

  setError: (error) => set({ error }),
}));
