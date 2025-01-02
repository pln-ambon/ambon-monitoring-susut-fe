"use server";

import { cookies } from "next/headers";

export async function logoutRequest(): Promise<any> {
  try {
    cookies().delete("token");
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}
