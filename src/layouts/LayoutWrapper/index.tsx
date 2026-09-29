import styles from "./styles.module.css";
export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return <div className={`${styles.wrapper} flex_column`}>{children}</div>;
}
