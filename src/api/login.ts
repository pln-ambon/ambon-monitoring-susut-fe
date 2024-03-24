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

    return Promise.resolve();
  } catch (error) {
    console.log(error.response, "<< error");
    return Promise.reject(error);
  }
}
