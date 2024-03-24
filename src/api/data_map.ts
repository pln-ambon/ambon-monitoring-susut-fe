"use server";

import axios from "@/config/axios";

export async function getDataMap(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/data-map",
      withCredentials: true,
    });

    return data || {};
  } catch (error) {
    console.log(error, "<< error table total");
    return {};
  }
}
