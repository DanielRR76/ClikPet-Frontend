import { api, type HttpResponse } from "@api";
import { PET_ENDPOINTS } from "../constants";
import type { AddPetForm, EditPetForm, Pet } from "../types";
import { requestHandler } from "@shared";

class PetService {
  async addPet(data: AddPetForm) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("age", String(data.age));
    formData.append("weight", String(data.weight));
    formData.append("color", data.color);

    if (data.images) {
      Array.from(data.images).forEach((image) => {
        formData.append("images", image);
      });
    }

    return requestHandler(() =>
      api.post<HttpResponse<Pet>>(PET_ENDPOINTS.ADD_PET, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    );
  }
  async getAllPets() {
    return requestHandler(() =>
      api.get<HttpResponse<Pet[]>>(PET_ENDPOINTS.GET_ALL_PETS),
    );
  }

  async getPetById(id: number) {
    return requestHandler(() =>
      api.get<HttpResponse<Pet>>(PET_ENDPOINTS.GET_PET_BY_ID(id)),
    );
  }

  async getMyPets() {
    return requestHandler(() =>
      api.get<HttpResponse<Pet[]>>(PET_ENDPOINTS.GET_MY_PETS),
    );
  }

  async getMyAdoptions() {
    return requestHandler(() =>
      api.get<HttpResponse<Pet[]>>(PET_ENDPOINTS.GET_MY_ADOPTIONS),
    );
  }

  async editPet(data: EditPetForm) {
    const formData = new FormData();

    if (data.name) formData.append("name", data.name);
    if (data.age) formData.append("age", String(data.age));
    if (data.weight) formData.append("weight", String(data.weight));
    if (data.color) formData.append("color", data.color);

    if (data.images && data.images instanceof FileList) {
      Array.from(data.images).forEach((image) => {
        formData.append("images", image);
      });
    }

    return requestHandler(() =>
      api.patch<HttpResponse<Pet>>(
        PET_ENDPOINTS.UPDATE_PET(data.id!),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      ),
    );
  }

  async deletePet(id: number) {
    return requestHandler(() =>
      api.delete<HttpResponse>(PET_ENDPOINTS.DELETE_PET(id)),
    );
  }

  async completeAdoption(id: number) {
    return requestHandler(() =>
      api.patch<HttpResponse>(PET_ENDPOINTS.COMPLETE_ADOPTION(id)),
    );
  }

  async scheduleAdoption(id: number) {
    return requestHandler(() =>
      api.patch<HttpResponse>(PET_ENDPOINTS.SCHEDULE_ADOPTION(id)),
    );
  }
}

export const petService = new PetService();
