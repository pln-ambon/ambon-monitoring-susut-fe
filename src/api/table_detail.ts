"use server";

import axios from "@/config/axios";

export async function getTableDetail() {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/detail-table",
      withCredentials: true,
    });

    return data || {};
  } catch (error) {
    console.log(error, "<< error table total");
    return {};
  }
}
