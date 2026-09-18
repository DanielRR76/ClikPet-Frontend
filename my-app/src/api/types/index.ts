export type HttpResponse<T = undefined> = {
  payload?: T;
  message: string;
};

export const HTTP_STATUS = {
  UNAUTHORIZED: 401,
};
