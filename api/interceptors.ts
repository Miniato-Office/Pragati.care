import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

function responseSuccessInterceptor(res: AxiosResponse<any, any>) {
  if (process.env.DEV) {
    console.log(res.data);
  }

  return {
    success: true,
    status: res.status,
    data: res.data,
  };
}

function responseErrorInterceptor(res: AxiosError) {
  if (process.env.DEV) {
    console.log(res.response?.data);
  }

  return {
    success: false,
    status: res.status,
    data: null,
  };
}

function requestSuccessInterceptor(config: AxiosRequestConfig) {
  // Do required stuff here
  return config;
}

function requestErrorInterceptor(res: AxiosError) {
  Promise.reject(res);
}

const interceptors = {
  res: {
    success: responseSuccessInterceptor,
    error: responseErrorInterceptor,
  },

  req: {
    success: requestSuccessInterceptor,
    error: requestErrorInterceptor,
  },
};

export default interceptors;
