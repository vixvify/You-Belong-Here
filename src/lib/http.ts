import axios from "axios";
import { ApiError } from "./api-error";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const data = error.response.data;

      return Promise.reject(
        new ApiError(
          data?.error?.message || "Request failed",
          data?.error?.code,
          error.response.status,
        ),
      );
    }

    if (error.request) {
      return Promise.reject(new ApiError("Network error", "NETWORK_ERROR"));
    }

    return Promise.reject(new ApiError(error.message));
  },
);

export default http;
