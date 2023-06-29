import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  // withCredentials: true,
});
