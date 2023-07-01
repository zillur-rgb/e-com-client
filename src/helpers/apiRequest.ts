import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://e-com-server-0f13.onrender.com/api/v1",
  // withCredentials: true,
});
