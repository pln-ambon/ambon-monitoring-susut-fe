"use client";

import axios from "@/config/axios-client";

export async function getDataTrend(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/trend",
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
