import type { JSX } from "react";

export type MenuProps = {
  toggleTheme: () => void;
  themeIcon: JSX.Element;
};

export type MenuVariant = "full" | "compact";
