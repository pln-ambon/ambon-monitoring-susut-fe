"use server";

import axios from "@/config/axios";

export async function getTotalTable(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/total-table",
      withCredentials: true,
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
