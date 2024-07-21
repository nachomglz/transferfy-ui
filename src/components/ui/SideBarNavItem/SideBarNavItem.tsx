import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import {
  Home01Icon,
  ShoppingCartCheck01Icon,
  Settings02Icon,
  SpotifyIcon,
} from "hugeicons-react";

type Icon = "home" | "settings" | "cart" | "spotify";

const iconList: Record<Icon, any> = {
  home: <Home01Icon size={20} />,
  settings: <Settings02Icon size={20} />,
  cart: <ShoppingCartCheck01Icon size={20} />,
  spotify: <SpotifyIcon size={20} />,
};

interface Props {
  to: string;
  icon?: Icon;
  isTitle?: boolean;
  children: React.ReactNode;
}

export const SideBarNavItem: FC<Props> = ({
  to,
  icon,
  children,
  isTitle = false,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        ${
          isTitle
            ? `
              text-title-light font-bold text-2xl
            `
            : `
              text-foreground-light
              hover:text-foreground-lightHover
              hover:bg-background-lightHover
              p-[.35rem] pr-3 pl-3 rounded-lg
              transition-colors
              duration-200
              flex gap-1 align-middle
            `
        }
        
        ${isActive && !isTitle ? "text-foreground-lightHover bg-background-lightHover" : ""}
      `}
    >
      {icon && iconList[icon]}
      <span>{children}</span>
    </NavLink>
  );
};
