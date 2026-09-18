import type { ToastData } from "../types";
import styles from "../styles.module.css";
import { ToastContent } from "../ToastContent";

type ToastContainerProps = {
  toasts: ToastData[];
  onClose: (id: string) => void;
};

export function ToastContainer({ toasts, onClose }: ToastContainerProps) {
  return (
    <div className={`${styles.container} flex_column`}>
      {toasts.map((toast) => (
        <ToastContent key={toast.id} toast={toast} onClose={onClose} />
      ))}
    </div>
  );
}
