import initializeApi from "./api";
import type { GetReqProps } from "./api.interface";

export const get = async (options: GetReqProps) => {
  const api = initializeApi({
    isSecured: options.isSecured || false,
    isServer: options.isServer || false,
  });

  return await api.get(options.path);
};
