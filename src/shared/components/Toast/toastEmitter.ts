import type { ToastData } from "./types";

type ToastListener = (
  type: ToastData["type"],
  message: string,
  duration?: number,
) => void;

const listeners = new Set<ToastListener>();

export const toastEmitter = {
  subscribe(listener: ToastListener) {
    listeners.add(listener);

    return () => {
      listeners.delete(listener);
    };
  },

  success(message: string, duration?: number) {
    listeners.forEach((listener) => listener("success", message, duration));
  },

  error(message: string, duration?: number) {
    listeners.forEach((listener) => listener("error", message, duration));
  },

  warning(message: string, duration?: number) {
    listeners.forEach((listener) => listener("warning", message, duration));
  },

  info(message: string, duration?: number) {
    listeners.forEach((listener) => listener("info", message, duration));
  },
};
