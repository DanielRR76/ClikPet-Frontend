import {
  capitalize,
  IMAGES_RESTRICTION,
  NAME_RESTRICTION,
  type BadgeColor,
  type Restriction,
  type ValidationRule,
} from "@shared";
import type { AddPetForm, EditPetForm } from "../types";
export const PET_ENDPOINTS = {
  GET_COLORS: "/colors",
  GET_ALL_PETS: "/pets",
  ADD_PET: "/pets/create",
  GET_MY_PETS: "/pets/mypets",
  GET_MY_ADOPTIONS: "/pets/myadoptions",
  GET_PET_BY_ID: (id: number) => `/pets/${id}`,
  UPDATE_PET: (id: number) => `/pets/${id}`,
  DELETE_PET: (id: number) => `/pets/${id}`,
  SCHEDULE_ADOPTION: (id: number) => `/pets/schedule/${id}`,
  COMPLETE_ADOPTION: (id: number) => `/pets/complete/${id}`,
} as const;

export const PET_QUERY_KEYS = {
  GET_COLORS: "getColors",
  GET_ALL_PETS: "getAllPets",
  ADD_PET: "addPet",
  GET_MY_PETS: "getMyPets",
  GET_MY_ADOPTIONS: "getMyAdoptions",
  GET_PET_BY_ID: (id: number) => `getPetById-${id}`,
  UPDATE_PET: (id: number) => `updatePet-${id}`,
  DELETE_PET: (id: number) => `deletePet-${id}`,
  SCHEDULE_ADOPTION: (id: number) => `scheduleAdoption-${id}`,
  COMPLETE_ADOPTION: (id: number) => `completeAdoption-${id}`,
} as const;

type BadgeStatus = "Adotado" | "Agendado";

export const PET_COLORS = ["Preto", "Branco", "Marrom", "Cinza", "Caramelo"];

export const ADOPTION_BADGE: {
  status: (adopterId?: number) => BadgeStatus;
  color: (adopterId?: number) => BadgeColor;
} = {
  status: (adopterId?: number) => (adopterId ? "Agendado" : "Adotado"),
  color: (adopterId?: number) => (adopterId ? "secondary" : "success"),
};

export const MAX_PET_AGE = 50;
export const MIN_PET_AGE = 0;
export const MAX_PET_WEIGHT = 150;
export const MIN_PET_WEIGHT = 0;

const PET_COLOR_RESTRICTION: Restriction = {
  message: "Cor inválida. Cores válidas: " + PET_COLORS.join(", "),
  isValid: (value: unknown) =>
    typeof value === "string" && PET_COLORS.includes(capitalize(value)),
};

export const ADD_PET_VALIDATION_RULES: ValidationRule<AddPetForm> = {
  name: NAME_RESTRICTION,
  color: PET_COLOR_RESTRICTION,
  images: IMAGES_RESTRICTION,
};

export const EDIT_PET_VALIDATION_RULES: ValidationRule<EditPetForm> = {
  name: NAME_RESTRICTION,
  color: PET_COLOR_RESTRICTION,
  images: IMAGES_RESTRICTION,
};
