import http from "./httpService";
import { apiEndpoint } from "../config.js";

export function login(formData) {
  return http.post(apiEndpoint + "login", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
