import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
type PopoverProps = {
  position?: "top" | "bottom" | "left" | "right";
  anchorRef: React.RefObject<HTMLElement | null>;
  onClose: () => void;
  children: React.ReactNode;
  isOpen?: boolean;
};

export function Popover({
  children,
  position = "bottom",
  isOpen = false,
  anchorRef,
  onClose,
}: PopoverProps) {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      const clickedPopover = popoverRef.current?.contains(target);

      const clickedAnchor = anchorRef.current?.contains(target);

      if (!clickedPopover && !clickedAnchor) {
        onClose();
      }
    }

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [isOpen, anchorRef]);

  if (!isOpen) return null;

  return (
    <div ref={popoverRef} className={`${styles.popover} ${styles[position]}`}>
      {children}
    </div>
  );
}
