import { FC, PropsWithChildren } from "react";
import { Progress } from "../ui/progress";
import Navbar from "./navbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Progress value={100 / 8} />
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
