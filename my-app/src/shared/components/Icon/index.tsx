import type { ColorVariant, SizeVariant } from "../../types";
import styles from "./styles.module.css";
import * as icons from "./icons";

interface IconDefinition {
  name: string;
  svg: React.ReactNode;
}

const iconMap: Record<string, () => IconDefinition> = {};

Object.values(icons).forEach((iconFn) => {
  if (typeof iconFn === "function") {
    const { name } = iconFn();
    iconMap[name] = iconFn;
  }
});

type IconFunctions = typeof icons;
export type IconName = ReturnType<IconFunctions[keyof IconFunctions]>["name"];

export interface IconProps {
  name: IconName;
  size?: SizeVariant;
  color?: ColorVariant;
}

export function Icon({ name, size = "medium", color }: IconProps) {
  const iconFn = iconMap[name];

  if (!iconFn) {
    console.error(`Icon name "${name}" not found.`);
    return null;
  }

  const { svg } = iconFn();

  return (
    <div className={styles[size]} style={{ color: `var(--${color})` }}>
      {svg}
    </div>
  );
}
