"use client";

import axios from "@/config/axios-client";

export async function getTableDetail() {
  try {
    // return {};

    const { data } = await axios({
      method: "GET",
      url: "/table_summary",
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
