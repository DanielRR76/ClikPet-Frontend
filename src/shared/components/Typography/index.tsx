import type { AlignVariant, ColorVariant, SizeVariant } from "../../types";
import styles from "./styles.module.css";

export interface TypographyProps {
  text: string;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  color?: ColorVariant | "inherit";
  size?: SizeVariant;
  align?: AlignVariant;
}
export type TypographyElement = React.ReactElement<TypographyProps>;
export function Typography({
  text,
  variant = "p",
  color = "inherit",
  size = "medium",
  align = "left",
}: TypographyProps) {
  const Tag = variant;
  return (
    <Tag
      className={styles[size]}
      style={{
        color: color === "inherit" ? "inherit" : `var(--${color})`,
        textAlign: align,
      }}
    >
      {text}
    </Tag>
  );
}
