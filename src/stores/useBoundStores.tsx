import { create } from "zustand";
import { createMyListingSlice, TMyListingSlice } from "./myListingSlice";

export const useBoundStore = create<TMyListingSlice>((...a) => ({
  ...createMyListingSlice(...a),
}));
