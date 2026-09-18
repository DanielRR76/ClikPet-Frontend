import { useQueryClient } from "@tanstack/react-query";

export function useQueryClientWrapper() {
  const queryClient = useQueryClient();
  return queryClient;
}
