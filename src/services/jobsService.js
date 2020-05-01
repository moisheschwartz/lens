import http from "./httpService";
import { apiEndpoint } from "../config.js";

export function getJobsList() {
  return http.get(`${apiEndpoint}jobs/list`);
}

export function getJob(id) {
  return http.get(`${apiEndpoint}job/${id}`);
}
