"use server";

import axios from "@/config/axios";

export async function getDataTrend(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/24-hour",
      withCredentials: true,
    });

    return data || {};
  } catch (error) {
    // console.log(error, "<< error table total");
    return {};
  }
}
