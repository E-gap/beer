import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https:/api.punkapi.com/v2/",
});

export const useBeerStore = create(
  devtools((set, get) => ({
    beers: [],
    selectedBeers: [],
    addBeers: () =>
      set(async () => {
        const result = await instance.get("/beers?page=1");
        set({ beers: result.data });
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
    deleteBeers: () => set((state) => {}),
  }))
);
