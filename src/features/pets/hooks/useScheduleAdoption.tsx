import { useMutationWrapper, useQueryClientWrapper } from "@app";
import { toast } from "@shared";
import { PET_QUERY_KEYS } from "../constants";
import { petService } from "../services";

export function useScheduleAdoption(id: number) {
  const queryClient = useQueryClientWrapper();
  const { mutate: scheduleAdoption } = useMutationWrapper({
    mutationFn: (id: number) => petService.scheduleAdoption(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [PET_QUERY_KEYS.GET_PET_BY_ID(id)],
      });
    },
    onError: (response) => {
      toast.error(response.message);
    },
  });
  return { scheduleAdoption };
}
