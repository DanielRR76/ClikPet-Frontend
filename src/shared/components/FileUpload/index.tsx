import { Button, type ButtonProps } from "../Button";
import { Input } from "../Input";
import { useRef } from "react";

type FileUploadProps = Omit<ButtonProps, "type" | "onClick"> & {
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
  required?: boolean;
  accept?: string;
};

export function FileUpload({
  text,
  icon,
  iconPosition,
  width,
  height,
  color = "primary",
  radius = "none",
  border = "thin",
  disabled = false,
  multiple = false,
  accept = "image/*",
  handleOnChange,
}: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onCLick = () => {
    inputRef.current?.click();
  };
  return (
    <>
      <Button
        disabled={disabled}
        text={text}
        icon={icon}
        width={width}
        height={height}
        radius={radius}
        color={color}
        border={border}
        iconPosition={iconPosition}
        onClick={onCLick}
      />
      <Input
        multiple={multiple}
        ref={inputRef}
        type="file"
        accept={accept}
        name="file-upload"
        hidden
        onChange={handleOnChange}
        disabled={disabled}
      />
    </>
  );
}
