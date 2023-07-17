import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https:/api.punkapi.com/v2/",
});

export const useBeerStore = create(
  devtools((set) => ({
    beers: [],
    page: 1,
    selectedBeers: [],
    increasePage: () => set((state) => ({ page: state.page + 1 })),
    addBeers: (page) =>
      set(async (state) => {
        const result = await instance.get(`/beers?page=${page}`);
        set({ beers: [...state.beers, ...result.data] });
      }),
    toSelectBeer: (id) =>
      set((state) => {
        if (!state.selectedBeers.includes(id)) {
          return { selectedBeers: [...state.selectedBeers, id] };
        } else
          return {
            selectedBeers: state.selectedBeers.filter((item) => item !== id),
          };
      }),
    deleteBeers: () =>
      set((state) => {
        let difference = state.beers.filter(
          (item) => !state.selectedBeers.includes(item.id)
        );
        return { beers: [...difference], selectedBeers: [] };
      }),
  }))
);
