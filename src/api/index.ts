import axios from "axios";

export const api = axios.create({
  baseURL:
    import.meta.env.VITE_ENVIRONMENT === "PROD"
      ? import.meta.env.VITE_API_URL
      : "http://localhost:3000",
  withCredentials: true,
});
export * from "./types";
