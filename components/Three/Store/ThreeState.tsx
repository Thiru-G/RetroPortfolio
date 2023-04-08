import { create } from "zustand";

interface LoginStageType {
  isLogged: boolean;
  setIsLogged: (value: boolean) => void;
}

export const useLoginStage = create<LoginStageType>(
  (set) => ({
    isLogged: false,
    setIsLogged: (value: boolean) =>
      set((state) => ({
        isLogged: value,
      })),
  })
);
