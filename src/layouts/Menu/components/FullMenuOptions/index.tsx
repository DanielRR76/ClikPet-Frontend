import { useNavigateWrapper } from "@router";
import { Button, Icon } from "@shared";
import styles from "./styles.module.css";
import { authenticatedOptions } from "../../constants";
import type { MenuProps } from "../../types";
import { ThemeOption } from "../ThemeOption";
import { useAuthContext } from "@stores";
import { AuthOption } from "../AuthOption";

export function FullMenuOptions({ toggleTheme, themeIcon }: MenuProps) {
  const navigate = useNavigateWrapper();
  const { isAuthenticated, isLoading } = useAuthContext();
  return (
    <div className={styles.fullMenu}>
      <ThemeOption variant="full" icon={themeIcon} onToggle={toggleTheme} />
      {!isLoading && (
        <>
          {isAuthenticated &&
            authenticatedOptions.map((option) => (
              <Button
                key={option.path}
                icon={<Icon name={option.icon} size="xlarge" />}
                color="translucent"
                border="thin"
                radius="small"
                onClick={() => navigate(option.path)}
              />
            ))}
          <AuthOption variant="full" />
        </>
      )}
    </div>
  );
}
