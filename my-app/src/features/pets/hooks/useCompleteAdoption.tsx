import { useMutationWrapper, useQueryClientWrapper } from "@app";
import { toast } from "@shared";
import { PET_QUERY_KEYS } from "../constants";
import { petService } from "../services";

export function useCompleteAdoption() {
  const queryClient = useQueryClientWrapper();
  const { mutate: completeAdoption } = useMutationWrapper({
    mutationFn: (id: number) => petService.completeAdoption(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [PET_QUERY_KEYS.GET_MY_PETS] });
    },
    onError: (response) => {
      toast.error(response.message);
    },
  });
  return { completeAdoption };
}
