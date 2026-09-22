import { api, type HttpResponse } from "@api";
import { USER_ENDPOINTS } from "../constants";
import type { AuthUser } from "@stores";
import type { EditUserForm } from "../types";
import { requestHandler } from "@shared";
class UserService {
  async getById(id: string) {
    return requestHandler(() =>
      api.get<HttpResponse<AuthUser>>(USER_ENDPOINTS.GET_USER_BY_ID(id)),
    );
  }

  async editUser(data: EditUserForm) {
    return requestHandler(() =>
      api.patch<HttpResponse<AuthUser>>(USER_ENDPOINTS.EDIT_USER, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    );
  }
}

export const userService = new UserService();
