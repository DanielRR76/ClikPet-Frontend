import { Icon, Typography } from "@shared";
import styles from "./styles.module.css";
export function Footer() {
  return (
    <footer className={`flex_align_center ${styles.footer}`}>
      <Icon name="clik-pets-with-text" size="huge" color="dark" />
      <Typography size="medium" text=" &copy; 2026" variant="h5" color="dark" />
    </footer>
  );
}
