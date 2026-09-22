import { useAuthContext } from "@stores";
import { useEffect } from "react";
import { useNavigateWrapper } from "../../hooks";
import { PATH } from "../../constants";
import { Outlet } from "react-router";

export function AuthGuard() {
  const { user } = useAuthContext();
  const navigate = useNavigateWrapper();

  useEffect(() => {
    if (!user) {
      navigate(PATH.LOGIN);
    }
  }, [user]);
  return <Outlet />;
}
