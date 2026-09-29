export type ToastType = "success" | "error" | "warning" | "info";

export type ToastData = {
  id: string;
  type: ToastType;
  message: string;
  duration: number;
};
