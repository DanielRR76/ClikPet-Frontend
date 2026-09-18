import { Fragment, type ReactNode } from "react";
import styles from "./styles.module.css";
import { Typography } from "@shared";

interface PageSectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function PageSection({ title, subtitle, children }: PageSectionProps) {
  return (
    <Fragment>
      <header className={styles.body_header}>
        <Typography
          color="inherit"
          size="xlarge"
          align="center"
          variant="h1"
          text={title}
        />
        {subtitle ? (
          <Typography
            color="inherit"
            size="medium"
            align="center"
            variant="p"
            text={subtitle}
          />
        ) : null}
      </header>

      {children}
    </Fragment>
  );
}
