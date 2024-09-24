import { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export type TProgressState =
  | "is-loading"
  | "setup-listing"
  | "setup-showing-availability"
  | "setup-showing-instructions"
  | "procurement-agreement"
  | "contact-info"
  | "confirm-company-brokerage"
  | "preview";

export type TMyListingSlice = {
  progressState: TProgressState;
  setCurrentPage: (progressState: TProgressState) => void;
};

export const createMyListingSlice: StateCreator<
  TMyListingSlice,
  [],
  [["zustand/devtools", never], ["zustand/persist", TMyListingSlice]]
> = devtools((set) => ({
  isLoading: true,
  progressState: "is-loading",
  setCurrentPage: (progressState) =>
    set((state) => ({
      ...state,
      previousProgressState: state.progressState,
      progressState,
    })),
}));
