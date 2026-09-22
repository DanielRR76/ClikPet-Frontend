import { api, type HttpResponse } from "@api";
import type { AuthUser } from "../types";
import { AUTH_ENDPOINTS } from "../constants";

export async function checkUser() {
  const response = await api.get<HttpResponse<AuthUser>>(
    AUTH_ENDPOINTS.CHECK_USER,
  );
  return response.data;
}

export async function logout() {
  await api.post<HttpResponse<null>>(AUTH_ENDPOINTS.LOGOUT);
}
