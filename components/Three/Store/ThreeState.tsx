import { create } from "zustand";

interface usePlayerSoundType {
  isIdle: boolean;
  setIsIdle: (value: boolean) => void;
}

export const usePlayerSound = create<usePlayerSoundType>(
  (set) => ({
    isIdle: true,
    setIsIdle: (value: boolean) =>
      set((state) => ({
        isIdle: value,
      })),
  })
);
