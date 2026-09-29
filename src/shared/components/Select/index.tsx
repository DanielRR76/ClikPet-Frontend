import type { ComponentSizing } from "../../types";
import { getHeight, getWidth } from "../../utils";
import styles from "./styles.module.css";
type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "width" | "height"
> & {
  options: string[];
  label?: string;
  isInvalid?: boolean;
} & ComponentSizing;
export function Select({
  label,
  name,
  options,
  value,
  width,
  height,
  isInvalid,
  onChange,
  ...props
}: SelectProps) {
  return (
    <div
      className={`${styles.select_container} flex_column`}
      style={{ width: getWidth(width), height: getHeight(height) }}
    >
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => {
          onChange?.(e);
        }}
        className={`${isInvalid ? styles.invalid : ""}`}
        {...props}
      >
        <option value={""} disabled>
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
