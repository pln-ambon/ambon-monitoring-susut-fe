"use server";

import axios from "@/config/axios";
import { cookies } from "next/headers";

export async function logoutRequest(): Promise<any> {
  try {
    // const response = await axios({
    //   method: "POST",
    //   url: "/auth/logout",
    //   data: {}
    // });

    cookies().delete("token");
    return Promise.resolve();
  } catch (error) {
    console.log(error.response?.data, "<< error");
    return Promise.reject(error);
  }
}
