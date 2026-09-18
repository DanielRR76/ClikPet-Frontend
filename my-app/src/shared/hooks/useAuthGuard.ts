import { HTTP_STATUS } from "@api";
import { PATH, useNavigateWrapper } from "@router";
import { toast } from "../components";

export function useAuthGuard() {
  const navigate = useNavigateWrapper();
  function checkResponseStatusError(status: number) {
    if (status === HTTP_STATUS.UNAUTHORIZED) {
      navigate(PATH.LOGIN);
      toast.error("Você precisa fazer login.");
    }
  }
  return { checkResponseStatusError };
}
