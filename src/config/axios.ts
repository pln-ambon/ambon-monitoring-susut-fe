import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const instance = axios.create({
  baseURL: process.env.APP_BASE_URL,
  timeout: 10000,
});

instance.interceptors.request.use(async (config) => {
  // do something
  return config;
});

// this function will be invoke if response code = 401
const refreshAuthLogic = async () => {
  try {
    // create req API refresh token
    // await instance.post("/refresh-token", {
    //   refreshToken: "your_refresh_token",
    // });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

export default instance;
