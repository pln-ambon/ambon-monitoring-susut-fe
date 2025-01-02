import React from "react";
import { CloudSun } from "lucide-react"; //Clear
import { CloudRain } from "lucide-react"; // Rain
import { Cloudy } from "lucide-react"; // Clouds
import { CloudDrizzle } from "lucide-react"; // Drizzle
import { CloudLightning } from "lucide-react"; // Thunderstorm
import { Cloud } from "lucide-react"; // default

export default function CloudRender({ name }: { name: string }) {
  return (
    <>
      {name === "Clear" && <CloudSun className="h-10 w-10" />}
      {name === "Rain" && <CloudRain className="h-10 w-10" />}
      {name === "Clouds" && <Cloudy className="h-10 w-10" />}
      {name === "Drizzle" && <CloudDrizzle className="h-10 w-10" />}
      {name === "Thunderstorm" && <CloudLightning className="h-10 w-10" />}

      {name !== "Thunderstorm" &&
        name !== "Clear" &&
        name !== "Rain" &&
        name !== "Clouds" &&
        name !== "Drizzle" && <Cloud className="h-10 w-10" />}
    </>
  );
}
