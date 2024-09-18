import { StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

type TProgressState = "setup-listing" | "showing-availability";

export type TMyListingSlice = {
  progressState: TProgressState;
  setCurrentPage: (progressState: TProgressState) => void;
};

export const createMyListingSlice: StateCreator<
  TMyListingSlice,
  [],
  [["zustand/devtools", never], ["zustand/persist", TMyListingSlice]]
> = devtools(
  persist(
    (set) => ({
      progressState: "setup-listing",
      setCurrentPage: (progressState) =>
        set((state) => ({ ...state, progressState })),
    }),
    { name: "myListing" }
  )
);
