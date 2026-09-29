import {
  EMAIL_RESTRICTION,
  NAME_RESTRICTION,
  PASSWORD_RESTRICTION,
  PHONE_RESTRICTION,
  type ValidationRule,
} from "@shared";
import type { LoginForm, RegisterForm } from "../types";

export const AUTH_ENDPOINTS = {
  LOGIN: "/users/login",
  REGISTER: "/users/register",
  LOGOUT: "/users/logout",
} as const;

export const AUTH_QUERY_KEYS = {
  LOGIN: "login",
  REGISTER: "register",
  LOGOUT: "logout",
} as const;

export const LOGIN_VALIDATION_RULES: ValidationRule<LoginForm> = {
  email: EMAIL_RESTRICTION,
  password: PASSWORD_RESTRICTION,
};

export const REGISTER_VALIDATION_RULES: ValidationRule<RegisterForm> = {
  name: NAME_RESTRICTION,
  email: EMAIL_RESTRICTION,
  phone: PHONE_RESTRICTION,
  password: PASSWORD_RESTRICTION,
  confirmPassword: PASSWORD_RESTRICTION,
};
