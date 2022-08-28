import { axiosApp } from "utils/axios";

export const getCommons = async () => {
  const result = await axiosApp.get("/infinity-web/static-asset/commons");
  return result.data;
};
