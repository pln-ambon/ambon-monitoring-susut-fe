"use server";

import axios from "@/config/axios";

interface LoginRequestProps {
  email: string;
  password: string;
}

export async function loginRequest(): Promise<any> {
  try {
    const { data } = await axios({
      method: "POST",
      url: "/auth/sign-in",
      // data: body,
    });

    return Promise.resolve(data);
  } catch (error) {
    // console.log(error.response?.data, "<< error");
    return Promise.reject(error);
  }
}
