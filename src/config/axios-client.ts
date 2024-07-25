import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "/api",
  timeout: 60000,
});

instance.interceptors.request.use(async (config) => {
  return config;
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error.response?.data);
  },
);

export default instance;
