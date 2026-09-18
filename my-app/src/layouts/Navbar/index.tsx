import { Logo } from "./Logo";
import { MenuOptions } from "../index";
import styles from "./styles.module.css";
export function Navbar() {
  return (
    <nav className={`flex_align_center ${styles.navbar}`}>
      <Logo />
      <MenuOptions />
    </nav>
  );
}
