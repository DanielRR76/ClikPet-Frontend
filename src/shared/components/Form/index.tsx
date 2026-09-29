import styles from "./styles.module.css";
interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
}
export function Form({ onSubmit, children }: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.form_container} flex_align_center`}
    >
      {children}
    </form>
  );
}
