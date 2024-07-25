"use cleint";

import axios from "@/config/axios-client";

export async function getDataGrafikBeban(): Promise<any> {
  try {
    // return {};

    const { data } = await axios({
      method: "GET",
      url: "/grafik_beban",
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
