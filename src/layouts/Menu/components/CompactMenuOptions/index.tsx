import { Button, Icon, Popover, RouterLink, Typography } from "@shared";
import compactMenuStyles from "./styles.module.css";
import styles from "../styles.module.css";
import type { MenuProps } from "../../types";
import { authenticatedOptions } from "../../constants";
import { ThemeOption } from "../ThemeOption";
import { useAuthContext } from "@stores";
import { useRef, useState } from "react";
import { AuthOption } from "../AuthOption";

export function CompactMenuOptions({ toggleTheme, themeIcon }: MenuProps) {
  const { isAuthenticated, isLoading } = useAuthContext();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement | null>(null);
  return (
    <div className={compactMenuStyles.phoneMenu}>
      <Button
        ref={anchorRef}
        icon={<Icon name="menu" size="xlarge" />}
        color="translucent"
        border="thin"
        radius="small"
        onClick={() => setIsPopoverOpen((prev) => !prev)}
      />
      {!isLoading && (
        <Popover
          isOpen={isPopoverOpen}
          anchorRef={anchorRef}
          onClose={() => setIsPopoverOpen(false)}
        >
          <ThemeOption
            variant="compact"
            icon={themeIcon}
            onToggle={toggleTheme}
          />
          {isAuthenticated &&
            authenticatedOptions.map((option) => (
              <RouterLink href={option.path} key={option.path}>
                <div className={styles.phoneMenuOptions}>
                  <Icon name={option.icon} size="xlarge" />
                  <Typography text={option.label} size="base" color="inherit" />
                </div>
              </RouterLink>
            ))}
          <AuthOption variant="compact" />
        </Popover>
      )}
    </div>
  );
}
