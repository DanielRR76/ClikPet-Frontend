import { useQueryWrapper } from "@app";
import { petService } from "../services";
import type { Pet } from "../types";
import { PET_QUERY_KEYS } from "../constants";
import type { HttpResponse } from "@api";

export function useGetMyPets() {
  return useQueryWrapper<HttpResponse<Pet[]>>({
    queryKey: PET_QUERY_KEYS.GET_MY_PETS,
    queryFn: () => petService.getMyPets(),
  });
}
