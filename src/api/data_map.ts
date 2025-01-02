"use client";

import axios from "@/config/axios-client";

export async function getDataMap(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/map",
    });

    return data || {};
  } catch (error) {
    return {};
  }
}

export async function getDataMapTernate(): Promise<any> {
  try {
    const { data } = await axios({
      method: "GET",
      url: "/ternate/map",
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
