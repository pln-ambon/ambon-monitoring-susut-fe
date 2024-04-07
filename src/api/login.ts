"use server";

import axios from "@/config/axios";
import { cookies } from "next/headers";

interface LoginRequestProps {
  email: string;
  password: string;
}

export async function loginRequest({ body }): Promise<any> {
  try {
    const response = await axios({
      method: "POST",
      url: "/auth/login",
      data: body,
    });

    // Set cookies from response headers
    const cookiesToSet = response.headers["set-cookie"];
    if (cookiesToSet) {
      cookiesToSet.forEach((cookie) => {
        const [name, value] = cookie.split(";")[0].split("=");

        cookies().set(name, value);
      });
    }

    cookies().set({
      name: "simon-user_name",
      value: response?.data?.full_name,
      path: "/",
    });

    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error?.response?.data?.message);
  }
}
