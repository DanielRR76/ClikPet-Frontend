import { Button, Icon, Typography } from "@shared";
import styles from "../styles.module.css";
import type { MenuVariant } from "../../types";
import { PATH, useNavigateWrapper } from "@router";
import { useAuthContext } from "@stores";

export function AuthOption({ variant }: { variant: MenuVariant }) {
  const navigate = useNavigateWrapper();
  const { isAuthenticated, clearAuthState } = useAuthContext();
  const handleAuthAction = () => {
    if (isAuthenticated) {
      clearAuthState();
    }
    navigate(PATH.LOGIN);
  };
  return variant === "full" ? (
    <Button
      icon={<Icon name={isAuthenticated ? "logout" : "login"} size="xlarge" />}
      color="translucent"
      border="thin"
      radius="small"
      onClick={handleAuthAction}
    />
  ) : (
    <div className={styles.phoneMenuOptions} onClick={handleAuthAction}>
      <Icon name={isAuthenticated ? "logout" : "login"} size="xlarge" />
      <Typography
        text={isAuthenticated ? "Sair" : "Login"}
        size="base"
        color="inherit"
      />
    </div>
  );
}
