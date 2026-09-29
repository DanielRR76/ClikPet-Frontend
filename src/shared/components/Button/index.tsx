import { isValidElement } from "react";
import type {
  AlignVariant,
  BorderThickness,
  ColorVariant,
  ComponentSizing,
  RadiusVariant,
} from "../../types";
import { Icon, Typography, type IconProps, type TypographyElement } from "..";
import styles from "./styles.module.css";
import { RADIUS_SIZE } from "../../constants";
import { getHeight, getWidth } from "../../utils";

export type ButtonColor = Exclude<
  ColorVariant,
  "secondary" | "dark" | "disabled"
>;

export type ButtonProps = {
  ref?: React.Ref<HTMLButtonElement>;
  text?: TypographyElement;
  icon?: React.ReactElement<IconProps>;
  iconPosition?: Exclude<AlignVariant, "center">;
  color?: ButtonColor | "translucent";
  radius?: RadiusVariant;
  border?: BorderThickness;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
} & ComponentSizing;

export function Button({
  text,
  icon,
  iconPosition = "left",
  width,
  height,
  color = "primary",
  radius = "none",
  border = "thin",
  type = "button",
  disabled = false,
  ref,
  onClick,
}: ButtonProps) {
  const isIconElement = isValidElement(icon) && icon.type === Icon;
  const isTextElement = isValidElement(text) && text.type === Typography;
  const isJustIcon = isIconElement && !isTextElement ? "iconOnly" : null;
  if (!isTextElement && !isIconElement) {
    console.warn(
      "Button component requires at least one of the following props: 'text' or 'icon'.",
    );
    return;
  }
  return (
    <button
      ref={ref}
      type={type}
      disabled={disabled}
      className={`flex_align_center ${styles.button} ${styles[disabled ? "disabled" : color]} ${border} ${styles[isJustIcon ?? iconPosition]}`}
      style={{
        width: getWidth(width),
        height: getHeight(height),
        borderRadius: RADIUS_SIZE[radius],
      }}
      onClick={onClick}
    >
      {isTextElement && text}
      {isIconElement && icon}
    </button>
  );
}
