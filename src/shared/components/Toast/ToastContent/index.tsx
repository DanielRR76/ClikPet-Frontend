import type { ToastData } from "../types";
import styles from "../styles.module.css";
import { Button } from "../../Button";
import { Typography } from "../../Typography";

type ToastProps = {
  toast: ToastData;
  onClose: (id: string) => void;
};
export function ToastContent({ toast, onClose }: ToastProps) {
  return (
    <div className={`${styles.toast} flex_align_center ${styles[toast.type]}`}>
      <div className={`${styles.content} flex_align_center`}>
        <Typography text={toast.message} size="base" color="dark" />
      </div>

      <Button
        onClick={() => onClose(toast.id)}
        color="translucent"
        radius="small"
        border="thin"
        text={<Typography text="×" size="large" />}
      />
    </div>
  );
}
