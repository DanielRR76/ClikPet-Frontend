import { api, type HttpResponse } from "@api";
import { USER_ENDPOINTS } from "../constants";
import type { User } from "@stores";
import type { EditUserForm } from "../types";
import { requestHandler } from "@shared";
class UserService {
  async getById(id: string) {
    return requestHandler(() =>
      api.get<HttpResponse<User>>(USER_ENDPOINTS.GET_USER_BY_ID(id)),
    );
  }

  async editUser(data: EditUserForm) {
    return requestHandler(() =>
      api.patch<HttpResponse<User>>(USER_ENDPOINTS.EDIT_USER, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    );
  }
}

export const userService = new UserService();
