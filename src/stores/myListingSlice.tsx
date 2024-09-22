import { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

type TProgressState =
  | "setup-listing"
  | "setup-showing-availability"
  | "setup-showing-instructions"
  | "procurement-agreement"
  | "contact-info";

export type TMyListingSlice = {
  progressState: TProgressState;
  setCurrentPage: (progressState: TProgressState) => void;
};

export const createMyListingSlice: StateCreator<
  TMyListingSlice,
  [],
  [["zustand/devtools", never], ["zustand/persist", TMyListingSlice]]
> = devtools((set) => ({
  progressState: "setup-listing",
  setCurrentPage: (progressState) =>
    set((state) => ({ ...state, progressState })),
}));
