import { useAuthGuard } from "@shared";
import { useMutation } from "@tanstack/react-query";

export function useMutationWrapper<
  TVariables = void,
  TData = unknown,
>(options: {
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: Error) => void;
}) {
  const { checkResponseStatusError } = useAuthGuard();
  const { mutate, data, error, isError, isSuccess, isPending } = useMutation<
    TData,
    Error,
    TVariables
  >({
    ...options,
    onError: (error: Error) => {
      if (options.onError) {
        checkResponseStatusError(error.cause as number);
        options.onError(error);
      }
    },
  });

  return { mutate, data, error, isPending, isError, isSuccess };
}
