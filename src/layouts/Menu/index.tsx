import { useTheme } from "./hooks/useTheme";
import { FullMenuOptions, CompactMenuOptions } from "./components";

export function Menu() {
  const { toggleTheme, icon } = useTheme();

  return (
    <>
      <FullMenuOptions toggleTheme={toggleTheme} themeIcon={icon} />
      <CompactMenuOptions toggleTheme={toggleTheme} themeIcon={icon} />
    </>
  );
}
