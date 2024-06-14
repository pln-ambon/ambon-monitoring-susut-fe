import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
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

// this function will be invoke if response code = 401
const refreshAuthLogic = async () => {
  try {
    // TODO: create req API refresh token

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

export default instance;
