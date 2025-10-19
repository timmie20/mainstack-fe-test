import MiniSideBar from "@/components/shared/mini-side-bar";
import { Navbar } from "@/components/shared/nav-bar";
import type { ReactNode } from "react";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <div className="max-w-[1406px] mx-auto">
        <Navbar />
        <MiniSideBar />
        {children}
      </div>
    </div>
  );
}
