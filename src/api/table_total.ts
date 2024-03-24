"use server";

import axios from "@/config/axios";
import { cookies } from "next/headers";

export async function getTotalTable(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/total-table",
      withCredentials: true,
    });
    // console.log(data, "<<< data");

    return data || {};
  } catch (error) {
    console.log(error, "<< error table total");
    // return Promise.reject(error);
    return {};
  }
}
