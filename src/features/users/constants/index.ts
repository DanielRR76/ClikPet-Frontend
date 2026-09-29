import {
  EMAIL_RESTRICTION,
  IMAGE_RESTRICTION,
  NAME_RESTRICTION,
  PASSWORD_RESTRICTION,
  PHONE_RESTRICTION,
  type ValidationRule,
} from "@shared";
import type { EditUserForm } from "../types";

export const USER_ENDPOINTS = {
  GET_USER_BY_ID: (id: string) => `/users/${id}`,
  EDIT_USER: "/users/edit",
} as const;

export const USER_QUERY_KEYS = {
  GET_USER_BY_ID: (id: string) => `getUserById-${id}`,
  EDIT_USER: "editUser",
} as const;

export const EDIT_USER_VALIDATION_RULES: ValidationRule<EditUserForm> = {
  name: NAME_RESTRICTION,
  email: EMAIL_RESTRICTION,
  phone: PHONE_RESTRICTION,
  password: PASSWORD_RESTRICTION,
  confirmPassword: PASSWORD_RESTRICTION,
  image: IMAGE_RESTRICTION,
};
