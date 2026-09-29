import { AxiosError } from "axios";
import type { AxiosResponse } from "axios";

export async function requestHandler<T>(
  request: () => Promise<AxiosResponse<T>>,
): Promise<T> {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        error.response?.data?.message || "Erro ao realizar a requisição";

      throw new Error(message, { cause: error.response?.status });
    }

    throw error;
  }
}
