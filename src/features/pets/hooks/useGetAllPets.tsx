import { useQueryWrapper } from "@app";
import { petService } from "../services";
import type { Pet } from "../types";
import { PET_QUERY_KEYS } from "../constants";
import type { HttpResponse } from "@api";

export function useGetAllPets() {
  return useQueryWrapper<HttpResponse<Pet[]>>({
    queryKey: PET_QUERY_KEYS.GET_ALL_PETS,
    queryFn: () => petService.getAllPets(),
  });
}
