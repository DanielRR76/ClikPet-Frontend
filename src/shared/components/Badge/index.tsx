import type { BorderThickness, ColorVariant, RadiusVariant } from "../../types";
import { type TypographyElement } from "../Typography";
import { RADIUS_SIZE } from "../../constants";
import styles from "./styles.module.css";
export type BadgeColor = Extract<
  ColorVariant,
  "disabled" | "secondary" | "success"
>;
interface BadgeProps {
  text: TypographyElement;
  color?: BadgeColor;
  radius?: RadiusVariant;
  border?: BorderThickness;
}
export function Badge({
  text,
  color = "secondary",
  radius = "small",
  border,
}: BadgeProps) {
  return (
    <div
      className={`${styles.badge} ${border} ${styles[color]}`}
      style={{ borderRadius: RADIUS_SIZE[radius] }}
    >
      {text}
    </div>
  );
}
