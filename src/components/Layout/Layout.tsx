import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../ui/Sidebar/Sidebar";

export const Layout: FC = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="content container p-5">
        <Outlet />
      </div>
    </div>
  );
};
