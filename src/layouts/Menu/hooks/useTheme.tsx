import { Icon } from "@shared";
import { useEffect, useState } from "react";

export type AvailableTheme = "light" | "dark";
export function useTheme() {
  const [theme, setTheme] = useState<AvailableTheme>(() => {
    const savedTheme = localStorage.getItem("theme") as AvailableTheme;
    return savedTheme || "light";
  });
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  const IconTheme = {
    light: <Icon name="moon" size="xlarge" />,
    dark: <Icon name="sun" size="xlarge" />,
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return { toggleTheme, icon: IconTheme[theme] };
}
