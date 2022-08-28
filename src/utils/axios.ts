import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { camelizeKeys, decamelizeKeys } from "humps";

import config from "../config";

const axiosApp = axios.create({
  baseURL: config.apiURL,
});

axiosApp.interceptors.response.use((response: AxiosResponse) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json; charset=utf-8"
  ) {
    response.data = camelizeKeys(response.data);
  }
  return response;
});

axiosApp.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };

  return newConfig;
});

export { axiosApp };
