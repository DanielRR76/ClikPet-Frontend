import React, { useLayoutEffect, useRef, type ReactElement } from "react";
import styles from "./styles.module.css";

export function Carousel({
  children,
  width = "100%",
}: {
  children: ReactElement | ReactElement[];
  width?: string;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const hasOneChild = React.Children.count(children) === 1;
  const [calculatedWidth, setCalculatedWidth] = React.useState(width);

  useLayoutEffect(() => {
    const firstChild = carouselRef.current?.firstElementChild;
    const nextElementSibling = firstChild?.nextElementSibling;
    if (!firstChild || !nextElementSibling) return;

    const measure = () => {
      if (!carouselRef.current) return;
      const carouselStyle = window.getComputedStyle(carouselRef.current);
      const nextSiblingMarginLeft = parseFloat(
        window.getComputedStyle(nextElementSibling).marginLeft,
      );
      const rootFontSize = parseFloat(
        getComputedStyle(document.documentElement).fontSize,
      );
      const horizontalSpacing =
        parseFloat(carouselStyle.paddingLeft) +
        parseFloat(carouselStyle.paddingRight) +
        nextSiblingMarginLeft;

      setCalculatedWidth(
        `${(firstChild.getBoundingClientRect().width + horizontalSpacing) / rootFontSize}rem`,
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(firstChild);
    return () => observer.disconnect();
  }, [children]);

  if (hasOneChild) {
    return children;
  }
  return (
    <div
      ref={carouselRef}
      className={styles.carousel}
      style={{ width: calculatedWidth }}
    >
      {children}
    </div>
  );
}
