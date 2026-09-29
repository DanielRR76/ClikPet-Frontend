import { Button, Typography } from "@shared";
import styles from "../styles.module.css";
import type { JSX } from "react";
import type { MenuVariant } from "../../types";

export type ThemeOptionProps = {
  variant: MenuVariant;
  onToggle: () => void;
  icon: JSX.Element;
};
export function ThemeOption({ variant, icon, onToggle }: ThemeOptionProps) {
  return variant === "full" ? (
    <Button
      icon={icon}
      color="translucent"
      onClick={onToggle}
      border="thin"
      radius="small"
    />
  ) : (
    <div className={styles.phoneMenuOptions} onClick={onToggle}>
      {icon}
      <Typography text="Tema" size="base" color="inherit" />
    </div>
  );
}
