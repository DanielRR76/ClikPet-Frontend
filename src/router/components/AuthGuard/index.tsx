import { useAuthContext } from "@stores";
import { useEffect } from "react";
import { useNavigateWrapper } from "../../hooks";
import { PATH } from "../../constants";
import { Outlet } from "react-router";

export function AuthGuard() {
  const { user, isLoading } = useAuthContext();
  const navigate = useNavigateWrapper();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate(PATH.LOGIN);
    }
  }, [user, isLoading]);
  return <Outlet />;
}
