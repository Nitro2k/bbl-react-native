import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Product } from "@/types/product";

type FavoritesState = {
  favorites: Product[];
  hasHydrated: boolean;
  setHasHydrated: (value: boolean) => void;
  toggleFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      hasHydrated: false,
      setHasHydrated: (value) => set({ hasHydrated: value }),
      toggleFavorite: (product) =>
        set((state) => {
          const exists = state.favorites.some((p) => p.id === product.id);
          return {
            favorites: exists
              ? state.favorites.filter((p) => p.id !== product.id)
              : [...state.favorites, product],
          };
        }),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "favorites-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ favorites: state.favorites }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
