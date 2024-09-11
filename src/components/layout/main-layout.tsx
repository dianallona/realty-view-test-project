import { FC, PropsWithChildren } from "react";
import Navbar from "./navbar";

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;
