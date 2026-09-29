import { useState, useEffect, useRef } from "react";
import { ToastContainer } from "./ToastContainer";
import { toastEmitter } from "./toastEmitter";
import type { ToastData } from "./types";

export function Toast() {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const previousToastId = useRef<string | null>(null);

  function removeToast(id: string) {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }

  function addToast(type: ToastData["type"], message: string, duration = 5000) {
    if (previousToastId.current) {
      removeToast(previousToastId.current);
    }
    const id = crypto.randomUUID();
    previousToastId.current = id;

    const toast: ToastData = {
      id,
      type,
      message,
      duration,
    };

    setToasts((current) => [...current, toast]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }

  useEffect(() => {
    return toastEmitter.subscribe(addToast);
  }, []);

  return <ToastContainer toasts={toasts} onClose={removeToast} />;
}

export { toastEmitter as toast };
