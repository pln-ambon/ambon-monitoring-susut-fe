"use server";

import axios from "axios";

export async function getWeather({
  lat,
  long,
}: {
  lat: number;
  long: number;
}): Promise<any> {
  try {
    const apiKey = "4ad999ed179aa0f0c4bd4155310a6d18";
    const { data } = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
    });

    return data || {};
  } catch (error) {
    return {};
  }
}
