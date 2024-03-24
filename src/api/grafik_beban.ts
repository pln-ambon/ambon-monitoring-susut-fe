"use server";

import axios from "@/config/axios";

export async function getDataGrafikBeban(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/scada/grafik-beban",
      withCredentials: true,
    });

    return data || {};
  } catch (error) {
    console.log(error, "<< error table total");
    return {};
  }
}
