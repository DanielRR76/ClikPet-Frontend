import { HTTP_STATUS } from "@api";
import { Typography } from "../Typography";
import { useAuthGuard } from "../../hooks";

type RequestStateProps = {
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  error?: Error | null;
  children?: React.ReactNode;
};
export function RequestState({
  isLoading,
  isError,
  error,
  errorMessage,
  children,
}: RequestStateProps) {
  const { checkResponseStatusError } = useAuthGuard();
  if (isLoading) return <Typography text="Carregando..." size="large" />;
  if (isError) {
    if (error && error.cause === HTTP_STATUS.UNAUTHORIZED) {
      checkResponseStatusError(error.cause as number);
      return;
    }
    return <Typography text={errorMessage} size="large" />;
  }
  return children;
}
