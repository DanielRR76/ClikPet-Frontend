import { useQueryWrapper } from "@app";
import { PET_QUERY_KEYS } from "../constants";
import { petService } from "../services";
import type { HttpResponse } from "@api";
import type { Pet } from "../types";

export function useGetMyAdoptions() {
  return useQueryWrapper<HttpResponse<Pet[]>>({
    queryKey: PET_QUERY_KEYS.GET_MY_ADOPTIONS,
    queryFn: () => petService.getMyAdoptions(),
  });
}
