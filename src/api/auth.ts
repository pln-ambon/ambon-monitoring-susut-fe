"use client";

import axios from "@/config/axios-client";

interface LoginRequestProps {
  email: string;
  password: string;
}

export async function loginRequest({ body }: any): Promise<any> {
  return await axios({
    method: "POST",
    url: "/login",
    data: body,
  });
}
