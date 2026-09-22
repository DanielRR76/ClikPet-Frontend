import { checkUser, logout } from "../services";
import type { AuthUser, AuthState } from "../types";
import {
  useMutationWrapper,
  useQueryClientWrapper,
  useQueryWrapper,
} from "@app";
import type { HttpResponse } from "@api";
import { AUTH_QUERY_KEYS } from "../constants";

export function useAuth() {
  const queryClient = useQueryClientWrapper();
  const { data, isLoading } = useQueryWrapper<HttpResponse<AuthUser>>({
    queryKey: AUTH_QUERY_KEYS.CHECK_USER,
    queryFn: () => checkUser(),
    retry: false,
  });
  const { mutate: logoutMutate } = useMutationWrapper({
    mutationFn: () => logout(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [AUTH_QUERY_KEYS.CHECK_USER] });
    },
  });

  const clearAuthState = () => {
    logoutMutate();
  };

  const setUser = (user?: AuthUser) => {
    if (user) {
      queryClient.setQueryData([AUTH_QUERY_KEYS.CHECK_USER], {
        payload: user,
      });
    }
  };

  const authState: AuthState = {
    isAuthenticated: !!data?.payload,
    isLoading,
    user: data?.payload,
    setUser,
    clearAuthState,
  };

  return authState;
}
