"use client";

import axios from "axios";

export async function getWeather({
  lat,
  long,
}: {
  lat: number;
  long: number;
}): Promise<any> {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    const { data } = await axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`,
    });

    return data || undefined;
  } catch (error) {
    return undefined;
  }
}
