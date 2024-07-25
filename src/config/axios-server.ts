import axios from "axios";
import { cookies } from "next/headers";

const instance = axios.create({
  baseURL: process.env.APP_BASE_URL,
  timeout: 60000,
});

instance.interceptors.request.use(
  function (config) {
    const tokenCookie = cookies().get("token");
    if (tokenCookie) {
      config.headers.Cookie = `${tokenCookie.name}=${tokenCookie.value}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // console.log( "<< error axios");
    
    return Promise.reject(error);
  },
);

export default instance;
