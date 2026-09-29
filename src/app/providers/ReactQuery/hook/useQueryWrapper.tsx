import { useQuery } from "@tanstack/react-query";

export function useQueryWrapper<TData>({
  queryKey,
  queryFn,
  retry,
}: {
  queryKey: string;
  queryFn: () => Promise<TData>;
  retry?: boolean | number;
}) {
  const { data, error, isLoading, isError, isSuccess } = useQuery<TData>({
    queryKey: [queryKey],
    queryFn,
    retry,
  });

  return { data, error, isLoading, isError, isSuccess };
}
