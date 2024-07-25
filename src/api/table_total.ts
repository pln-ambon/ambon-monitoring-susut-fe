"use client";

import axios from "@/config/axios-client";

export async function getTotalTable(): Promise<any> {
  try {
    // return {};

    const { data } = await axios({
      method: "GET",
      url: "/summary",
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
