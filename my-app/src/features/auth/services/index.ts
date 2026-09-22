import { api, type HttpResponse } from "@api";
import { AUTH_ENDPOINTS } from "../constants";
import type { LoginForm, RegisterForm } from "../types";
import type { AuthUser } from "@stores";
import { requestHandler } from "@shared";
class AuthService {
  async login(data: LoginForm) {
    return requestHandler(() =>
      api.post<HttpResponse<AuthUser>>(AUTH_ENDPOINTS.LOGIN, data),
    );
  }

  async register(data: RegisterForm) {
    return requestHandler(() =>
      api.post<HttpResponse<AuthUser>>(AUTH_ENDPOINTS.REGISTER, data),
    );
  }

  async logout() {
    return requestHandler(() => api.post<HttpResponse>(AUTH_ENDPOINTS.LOGOUT));
  }
}

export const authService = new AuthService();
