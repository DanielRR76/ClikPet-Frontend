import type { ComponentSizing } from "../../types";
import { getHeight, getWidth } from "../../utils";
import styles from "./styles.module.css";
type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "width" | "height"
> &
  ComponentSizing & {
    label?: string;
    isInvalid?: boolean;
    ref?: React.Ref<HTMLInputElement>;
  };
export function Input({
  type = "text",
  label,
  name,
  width,
  height,
  isInvalid,
  value,
  ...props
}: InputProps) {
  return (
    <div className={`${styles.input_container} flex_column`}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        {...props}
        value={type === "file" ? undefined : (value ?? "")}
        className={`${isInvalid ? styles.invalid : ""}`}
        type={type}
        name={name}
        id={name}
        style={{
          width: getWidth(width),
          height: getHeight(height),
        }}
      />
    </div>
  );
}
