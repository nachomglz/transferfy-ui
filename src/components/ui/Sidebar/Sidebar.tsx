import { FC } from "react";
import { SideBarNavItem } from "../SideBarNavItem/SideBarNavItem";

export const Sidebar: FC = () => {
  return (
    <div className="bg-white flex-shrink-0 inset-y-0 left-0 z-10 max-w-48 flex-col border-r border-r-border-light p-5">
      <div className="h-full flex flex-col gap-3">
        <SideBarNavItem isTitle to={"/"}>
          Transferfy
        </SideBarNavItem>

        <nav className="flex flex-col justify-between h-full">
          <div className="sidebar-top flex flex-col gap-2">
            <SideBarNavItem icon={"home"} to={"/home"}>
              Home
            </SideBarNavItem>
            <SideBarNavItem icon={"spotify"} to={"/spotify"}>
              Spotify
            </SideBarNavItem>
          </div>
          <div className="sidebar-bottom">
            <SideBarNavItem icon={"settings"} to={"/settings"}>
              Settings
            </SideBarNavItem>
          </div>
        </nav>
      </div>
    </div>
  );
};
