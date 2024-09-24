import { FC, PropsWithChildren } from "react";
import { MY_LISTING_STATE_ORDER } from "../../constants";
import { useBoundStore } from "../../stores/useBoundStores";
import { Progress } from "../ui/progress";
import Navbar from "./navbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const state = useBoundStore();
  const progressIndex = MY_LISTING_STATE_ORDER.findIndex(
    (value) => value === state.progressState
  );
  const progressPercentage =
    (progressIndex / MY_LISTING_STATE_ORDER.length) * 100;

  return (
    <main className="min-w-screen h-auto">
      <Progress value={progressPercentage} />
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
