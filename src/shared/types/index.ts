export type ColorVariant =
  | "primary"
  | "secondary"
  | "gray"
  | "dark"
  | "success"
  | "danger"
  | "disabled"
  | "transparent";

export type RadiusVariant =
  | "none"
  | "small"
  | "medium"
  | "large"
  | "x-large"
  | "full";

export type SizeVariant =
  | "small"
  | "base"
  | "medium"
  | "large"
  | "xlarge"
  | "huge";

export type AlignVariant = "left" | "center" | "right";

export type BorderThickness = "thin" | "thick";

export type ComponentSizing = {
  /** The only supported units of measurement are `rem` and `%` */
  width?: string;
  /** The only supported units of measurement are `rem` and `%` */
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
};

export type Restriction = {
  isValid: (value: unknown) => boolean;
  message: string;
};

export type ValidationRule<T> = Partial<Record<keyof T, Restriction>>;

export type FormErrors<T> = Partial<Record<keyof T, boolean>>;
