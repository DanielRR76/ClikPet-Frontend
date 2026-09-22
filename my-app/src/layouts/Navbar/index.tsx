import { Logo } from "./Logo";
import { Menu } from "..";
import styles from "./styles.module.css";
export function Navbar() {
  return (
    <nav className={`flex_align_center ${styles.navbar}`}>
      <Logo />
      <Menu />
    </nav>
  );
}
