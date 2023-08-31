import axios from "axios";
import { ApiInitOptions } from "./api.interface";
import interceptors from "./interceptors";

const BASE_URL = process.env.BASE_URL;
const API_BASE_URL = process.env.API_BASE_URL;

// API initialization
function initializeApi(options: ApiInitOptions) {
  const api = axios.create({ baseURL: API_BASE_URL });

  if (options.isSecured) {
    api.defaults.headers["authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;
  }

  api.interceptors.response.use(
    interceptors.res.success as any,
    interceptors.res.error as any
  );

  api.interceptors.request.use(
    interceptors.req.success as any,
    interceptors.req.error as any
  );

  return api;
}

export default initializeApi;
