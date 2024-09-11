import { FC, PropsWithChildren } from "react";
import { Progress } from "../ui/progress";
import Navbar from "./navbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="min-w-screen h-screen">
      <Progress value={100 / 8} />
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
