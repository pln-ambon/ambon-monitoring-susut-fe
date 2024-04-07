"use client"
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Droplets } from "lucide-react";
import { ThermometerSnowflake } from "lucide-react";

import CloudRender from "./CloudRender"

import { roundNumber } from "@/utils/rounded";

import { getDataMap } from "@/api/data_map";
import { getWeather } from "@/api/weather";

export default function MapLine() {
  const { data } = useQuery({
    queryKey: ["/data_map"],
    queryFn: () => getDataMap(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  // sirimau
  const { data: weatherSirimau } = useQuery({
    queryKey: ["/weather_sirimau"],
    queryFn: () =>
      getWeather({
        lat: -3.688843,
        long: 128.222129,
      }),
    staleTime: 1000,
    refetchInterval: 60000 * 15, // 15 menit
    refetchIntervalInBackground: true,
  });

  // passo
  const { data: weatherPasso } = useQuery({
    queryKey: ["/weather_passo"],
    queryFn: () =>
      getWeather({
        lat: -3.615495,
        long: 128.262228,
      }),
    staleTime: 1000,
    refetchInterval: 60000 * 15, // 15 menit
    refetchIntervalInBackground: true,
  });

  // hative besar
  const { data: weatherHativeBesar } = useQuery({
    queryKey: ["/weather_hative_besar"],
    queryFn: () =>
      getWeather({
        lat: -3.662441,
        long: 128.160236,
      }),
    staleTime: 1000,
    refetchInterval: 60000 * 15, // 15 menit
    refetchIntervalInBackground: true,
  });

  // Waai
  const { data: weatherWaai } = useQuery({
    queryKey: ["/weather_waai"],
    queryFn: () =>
      getWeather({
        lat: -3.549957,
        long: 128.335663,
      }),
    staleTime: 1000,
    refetchInterval: 60000 * 15, // 15 menit
    refetchIntervalInBackground: true,
  });

  // console.log(data);
  

  return (
    <foreignObject width="100%">
      <svg
        width="100%"
        viewBox="0 0 3808 1761"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="1.09863"
          y="329.127"
          width="2227.71"
          height="1431.82"
          fill="url(#pattern0_18_3)"
        />
        <rect
          x="2353.06"
          width="1454.47"
          height="1165.18"
          fill="url(#pattern1_18_3)"
        />
        <rect
          y="0.00390625"
          width="514.601"
          height="745.237"
          fill="url(#pattern2_18_3)"
        />
        <path
          d="M1639.42 1007.25L1623.6 1030.37"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M2000.48 585.828H1972.14V614.175H2000.48V585.828Z"
          fill="#66FF33"
          stroke="#205867"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2003.14 633.068H1974.79V661.415H2003.14V633.068Z"
          fill="#66FF33"
          stroke="#205867"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1415.6 1379.52C1423.95 1379.52 1430.72 1372.75 1430.72 1364.41C1430.72 1356.06 1423.95 1349.29 1415.6 1349.29C1407.25 1349.29 1400.49 1356.06 1400.49 1364.41C1400.49 1372.75 1407.25 1379.52 1415.6 1379.52Z"
          fill="#FF0000"
          stroke="#372277"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1942.8 631.217L1906.75 663.309"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1906.76 663.304L1910.72 727.555"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1910.72 727.557L1901.28 788.778"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1901.27 788.799L1880.48 846.629"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1880.49 846.602L1838.92 880.619"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1838.92 880.616L1770.88 888.175"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1770.89 888.176L1693.38 896.788"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1643.69 890.068L1609.32 888.917"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1611.22 888.181L1572.29 903.298"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1573.76 902.735L1542.21 927.868"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1544.67 925.92L1513.88 944.868"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1515.9 944.113L1487.41 947.551"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1488.41 947.561H1459.07"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1460.97 947.55L1427 945.332"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1428.85 944.872L1389.77 954.737"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1391.03 954.326L1341.57 970.331"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1343.81 969.433L1287.11 992.112"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1288.59 991.526L1234.19 1020.47"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1236.55 1019.23L1183.17 1048.8"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1184.63 1048.01L1128.35 1079.06"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1129.99 1078.15L1083.96 1108.08"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1083.92 1108.1L1031.97 1133.86"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1031.99 1133.85L980.963 1152.75"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M980.954 1152.75L957.884 1175.82"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M957.894 1175.82L950.545 1206.5"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1663.84 893.129L1637.44 889.862"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1663.96 902.438L1638.61 916.517"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1639.77 915.877L1618.81 931.601"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1621.09 929.906L1607.22 952.45"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1608.14 950.934L1601.93 975.108"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1601.97 972.286L1609 1007.01"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1644.71 1099.09L1669.58 1146.7"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1668.1 1143.86V1188.01"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1669.4 1184.88L1644.41 1214.65"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1646.07 1212.98L1605.31 1243.09"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1607.43 1241.56L1571.94 1276.48"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1573.7 1274.7L1528.22 1308.47"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1528.23 1308.46L1484.51 1340.47"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1486.42 1339.07L1432.6 1358.73"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1332.46 1060.15L1340.02 1084.72"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1340.01 1082.83V1101.72"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1341.9 1097.94L1321.11 1107.39"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1323.64 1106.24L1290.61 1106.79"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1343.79 1030.87H1315.45V1059.21H1343.79V1030.87Z"
          fill="#FF9900"
          stroke="#205867"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1292.76 1106.25L1258.75 1114.96"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1259.83 1114.68L1224.72 1123.67"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1225.92 1123.36L1190.71 1132.37"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1192.3 1131.96L1161.03 1144.14"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1164.37 1142.81L1130.62 1158.8"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1133.07 1157.64L1101.91 1176.93"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1103.8 1175.73L1073.16 1195.09"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1074.87 1194.01L1044.38 1212.73"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1047.19 1211.49L1009.59 1228.09"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1012.23 1226.93L965.681 1224.99"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M950.726 1237.79C959.076 1237.79 965.845 1231.02 965.845 1222.67C965.845 1214.32 959.076 1207.56 950.726 1207.56C942.377 1207.56 935.608 1214.32 935.608 1222.67C935.608 1231.02 942.377 1237.79 950.726 1237.79Z"
          fill="#FF0000"
          stroke="#372277"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1469.03 1116.32L1449.61 1135.74"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1490.46 1115.56L1465.86 1117.41"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1507.82 1120.81L1488.48 1115.7"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1529.36 1116.87L1506.25 1120.4"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1562.62 1092.34L1527.29 1117.19"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1595.64 1059.31L1561.43 1093.52"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1624.24 1029.7L1591.53 1063.43"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1622.72 1042.39L1645.84 1101.28"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1608.36 1005.35L1623.45 1044.23"
          stroke="#FF0000"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1457.18 1133.86H1428.83V1162.2H1457.18V1133.86Z"
          fill="#FF9900"
          stroke="#205867"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1639.71 977.528L1638.12 1009.14"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1646.7 948.353L1639.42 978.91"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1661.49 925.634L1645.34 950.412"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1677.1 911.83L1660.6 927.019"
          stroke="#FF9900"
          strokeWidth="7.99997"
          strokeMiterlimit="3"
        />
        <path
          d="M1678.28 912.759C1686.63 912.759 1693.4 905.99 1693.4 897.641C1693.4 889.291 1686.63 882.522 1678.28 882.522C1669.93 882.522 1663.17 889.291 1663.17 897.641C1663.17 905.99 1669.93 912.759 1678.28 912.759Z"
          fill="#FF0000"
          stroke="#372277"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
        />
        <path
          d="M1952.78 634.96C1961.13 634.96 1967.89 628.191 1967.89 619.842C1967.89 611.492 1961.13 604.724 1952.78 604.724C1944.43 604.724 1937.66 611.492 1937.66 619.842C1937.66 628.191 1944.43 634.96 1952.78 634.96Z"
          fill="#FF0000"
          stroke="#372277"
          strokeWidth="5.33331"
          strokeMiterlimit="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1990.19 578.266L2065.38 485.204"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M2006.93 646.302L2103.38 695.204"
          stroke="black"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M1935.12 604.715L1820.38 540.204"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M1666.78 880.639L1572.38 822.205"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M1315.46 1030.87L1209.38 981.204"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M1462.67 1156.53L1639.38 1243.2"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M1437.38 1364.2L1507.38 1394.2"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        <path
          d="M929.768 1209.44L822.376 1167.2"
          stroke="white"
          strokeWidth="1.33333"
          strokeMiterlimit="3"
          strokeLinecap="square"
          strokeDasharray="16 16"
        />
        {/* weather */}
        <foreignObject x="30" y="160" width="250" height="500">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-semibold">Sirimau</div>
            <div className="p-4 text-gray-700 rounded-xl text-2xl  flex gap-6 items-center">
              
              <CloudRender name={weatherSirimau?.weather[0]?.main} />
              <div className="flex flex-col">
                <span>Weather</span>
                <span className="font-semibold">
                  {weatherSirimau?.weather[0]?.main}
                </span>
              </div>
            </div>

            <div className="p-4 text-2xl  flex gap-6 bg-opacity-80 items-center">
              <Droplets className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Humidity</span>
                <span className="font-semibold">
                  {weatherSirimau?.main?.humidity}%
                </span>
              </div>
            </div>

            <div className=" p-4 rounded-xl text-2xl  flex gap-6 bg-opacity-80 items-center">
              <ThermometerSnowflake className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Temp.</span>
                <span className="font-semibold">
                  {roundNumber(weatherSirimau?.main?.temp - 273.15)}&deg; C{" "}
                </span>
              </div>
            </div>
          </div>
        </foreignObject>

        <foreignObject x="250" y="160" width="250" height="500">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-semibold">Passo</div>
            <div className="p-4 text-gray-700 rounded-xl text-2xl  flex gap-6 items-center">
            <CloudRender name={weatherPasso?.weather[0]?.main} />

              <div className="flex flex-col">
                <span>Weather</span>
                <span className="font-semibold">
                  {weatherPasso?.weather[0]?.main}
                </span>
              </div>
            </div>

            <div className="p-4 text-2xl  flex gap-6 bg-opacity-80 items-center">
              <Droplets className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Humidity</span>
                <span className="font-semibold">
                  {weatherPasso?.main?.humidity}%
                </span>
              </div>
            </div>

            <div className=" p-4 rounded-xl text-2xl  flex gap-6 bg-opacity-80 items-center">
              <ThermometerSnowflake className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Temp.</span>
                <span className="font-semibold">
                  {roundNumber(weatherPasso?.main?.temp - 273.15)}&deg; C{" "}
                </span>
              </div>
            </div>
          </div>
        </foreignObject>

        <foreignObject x="500" y="160" width="250" height="500">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-semibold">Hative Besar</div>
            <div className="p-4 text-gray-700 rounded-xl text-2xl  flex gap-6 items-center">
            <CloudRender name={weatherHativeBesar?.weather[0]?.main} />

              <div className="flex flex-col">
                <span>Weather</span>
                <span className="font-semibold">
                  {weatherHativeBesar?.weather[0]?.main}
                </span>
              </div>
            </div>

            <div className="p-4 text-2xl  flex gap-6 bg-opacity-80 items-center">
              <Droplets className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Humidity</span>
                <span className="font-semibold">
                  {weatherHativeBesar?.main?.humidity}%
                </span>
              </div>
            </div>

            <div className=" p-4 rounded-xl text-2xl  flex gap-6 bg-opacity-80 items-center">
              <ThermometerSnowflake className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Temp.</span>
                <span className="font-semibold">
                  {roundNumber(weatherHativeBesar?.main?.temp - 273.15)}&deg; C{" "}
                </span>
              </div>
            </div>
          </div>
        </foreignObject>

        <foreignObject x="750" y="160" width="250" height="500">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl font-semibold">Waai</div>
            <div className="p-4 text-gray-700 rounded-xl text-2xl  flex gap-6 items-center">
            <CloudRender name={weatherWaai?.weather[0]?.main} />

              <div className="flex flex-col">
                <span>Weather</span>
                <span className="font-semibold">
                  {weatherWaai?.weather[0]?.main}
                </span>
              </div>
            </div>

            <div className="p-4 text-2xl  flex gap-6 bg-opacity-80 items-center">
              <Droplets className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Humidity</span>
                <span className="font-semibold">
                  {weatherWaai?.main?.humidity}%
                </span>
              </div>
            </div>

            <div className=" p-4 rounded-xl text-2xl  flex gap-6 bg-opacity-80 items-center">
              <ThermometerSnowflake className="h-16 w-16" />
              <div className="flex flex-col">
                <span>Temp.</span>
                <span className="font-semibold">
                  {roundNumber(weatherWaai?.main?.temp - 273.15)}&deg; C{" "}
                </span>
              </div>
            </div>
          </div>
        </foreignObject>

        {/* pembangkit */}
        <foreignObject x="30" y="30" width="800" height="200">
          <div className="p-8 text-4xl flex flex-col gap-2">
            <i className="font-bold">LAST UPDATE</i>
            <i className="underline">{data?.date}</i>
          </div>
        </foreignObject>
        <foreignObject x="2070" y="380" width="400" height="200">
          <div className="bg-gray-200 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">PLTMG AMBON PEAKER</span>
            <span>BEBAN: {roundNumber(data?.["PLTMG WAAI"]?.pTotal)} MW</span>
          </div>
        </foreignObject>
        <foreignObject x="2110" y="700" width="350" height="200">
          <div className="bg-gray-200 p-4 border border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">BMPP</span>
            <span>BEBAN: {roundNumber(data?.["BMPP WAAI"]?.pTotal)} MW</span>
          </div>
        </foreignObject>
        <foreignObject x="905" y="870" width="300" height="200">
          <div className="bg-gray-200 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">PLTD POKA</span>
            <span>BEBAN: {roundNumber(data?.["PLTD POKA"]?.pTotal)} MW</span>
          </div>
        </foreignObject>
        <foreignObject x="1650" y="1240" width="300" height="200">
          <div className="bg-gray-200 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">PLTD HATIVE</span>
            <span>
              BEBAN: {roundNumber(data?.["PLTD HATIVE KECIL"]?.pTotal)} MW
            </span>
          </div>
        </foreignObject>
        {/* gi */}
        <foreignObject x="1420" y="420" width="400" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI WAAI</span>
            <span>TEGANGAN: {roundNumber(data?.["GI WAAI"]?.vAverage)} KV</span>
          </div>
        </foreignObject>
        <foreignObject x="1520" y="1400" width="400" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI SIRIMAU</span>
            <span>BEBAN: {roundNumber(data?.["GI SIRIMAU"]?.pTotal)} MW</span>
            <span>
              TEGANGAN: {roundNumber(data?.["GI SIRIMAU"]?.vAverage)} KV
            </span>
          </div>
        </foreignObject>
        <foreignObject x="460" y="1010" width="350" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI HATIVE BESAR</span>
            <span>
              BEBAN: {roundNumber(data?.["GI HATIVE BESAR"]?.pTotal)} MW
            </span>
            <span>
              TEGANGAN: {roundNumber(data?.["GI HATIVE BESAR"]?.vAverage)} KV
            </span>
          </div>
        </foreignObject>
        <foreignObject x="1210" y="660" width="350" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI PASSO & GIS PASSO</span>
            <span>
              BEBAN:{" "}
              {roundNumber(
                data?.["GIS PASSO"]?.pTotal,
              )}
              MW
            </span>
            <span>
              TEGANGAN:{" "}
              {roundNumber(
                data?.["GIS PASSO"]?.vAverage) 
              }
              KV
            </span>
          </div>
        </foreignObject>
        <defs>
          <pattern
            id="pattern0_18_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_18_3"
              transform="scale(0.000598444 0.000931099)"
            />
          </pattern>
          <pattern
            id="pattern1_18_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_18_3"
              transform="scale(0.00091659 0.00114416)"
            />
          </pattern>
          <pattern
            id="pattern2_18_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_18_3"
              transform="scale(0.00259067 0.00178891)"
            />
          </pattern>
          <image
            id="image0_18_3"
            width="1671"
            height="1074"
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="image1_18_3"
            width="1091"
            height="874"
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="image2_18_3"
            width="386"
            height="559"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYIAAAIvCAYAAAB5kNwkAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACjaSURBVHhe7d1bqHX7edfx5pyYBIkllooYbE2FoKK9yoVUhV4oUWwlqAS3hxCphgrBhnhhoEIVSdGGgoq6FWFflOJFLBJbJZ4CpRtP9CJBJKilKClWwUZtWnP0eV7W3M53zu963/Wfaxz+z3i+Fx+S/lJC9hrPYf3HGHOub/j6179e2qf/7U9pGR8IX5eK+Uz4KM0GPRyGlUQR6PFeH/56oEaTZvZxmgsag2ElUQh6PJeAKsq6/XaaCxqDYSVRCHqcbCYXgarJmv0AzQSNw7CSKAbd7qXgElA1T5ZAwJmgcRhWksWgm+QSSNRo0sxyETypY5oJGodhJaeC0BCXgCpzESwMw0pOBaEHcwmouie3hRLNBI3DsJJTQei53h1cAqouTwPfHp7UNc0EjcOwklNB6JnyNygXgI7gldtCiWaCxmFYyXlR6BX5G1M2zMmLgZpKqsZFsAIMKzkvCr3Cr4vQUeUi8NbQwjCs5FQQeko2CzWRdASvnApoJmgchpWcCkJPyQfD1EDSEbgIFoZhJaeC0FPy6OzDYR2Vi2BhGFZyKghd8faQjspFsDAMKzkVhK64CHRULoKFYVjJqSB0xUWgo/KTxQvDsJJTQejK6bME1EhSZS6ChWFYyakghFwEOpqsaT9HsDAMKzkVhJCLQEeTNf1KjdNM0DgMKzkvCl1xEehoXAQrwLCS86LQFReBjiZr2mcEC8OwklNBCLkIdERZ10+eE9BM0DgMK8li0L1cBDqqrG2cCRqHYSVZDLqXi0BH9eRUQDNB4zCsJIpB93MR6Mg+QDNB4zCsJIpB93MR6MhcBAvBsJIoBt3PRaAjcxEsBMNKohh0v3yzghpIqs5nBAvCsJIoBt3P7xvSUWVd40zQOAwryWLQM7kIdEQuggVhWEkWg57JRaAjchEsCMNKshj0TC4CHZGLYEEYVpLFoGdyEeiInnzfEM0EjcOwkiwGPVM2DDWSVFX+cuMiWBCGlWQx6JlcBDqaJ7eFEs0EjcOwklNB6F7eGtLRuAgWhmElp4LQvVwEOpJXbgslmgkah2Elp4IQyoZxEegospZfOQ0kmgkah2El50WhKz4f0JE8tQQSzQSNw7CSy8LQUzwN6Ciylp/8VbJzNBM0DsNKLgtDr/C2kI4i6/iV5wLnaCZoHIaVUHHoCZeAjiJrmWocZ4LGYVgJFYeeNI6LQEdw72kg0UzQOAwroeJozltCOpJ7TwOJZoLGYVgJFUdzLgEdyb2ngUQzQeMwrISKozkXgY7imbeFEs0EjcOwEiqOxrwtpCN55m2hRDNB4zCshIqjMf9GsY7ERbARDCuh4mjMRaAjcRFsBMNKqDga84/V60hcBBvBsBIqjuZcBDoKF8FGMKyEiqM5F4GOwkWwEQwroeJozkWgo3jmq6OJZoLGYVgJFUdzLgIdQdbx1beNXqKZoHEYVkLF0ZyLQEfw3NtCiWaCxmFYCRVHY741pKN47m2hRDNB4zCshIqjsWweaiqpkvxlxkWwIQwroeJozNOAqssaftBtoUQzQeMwrISKoym/Z0hH8OAlkGgmaByGlVBxNOUS0BG4CHaAYSVUHA15GtBRuAh2gGElVBwNuQR0FC6CHWBYCRVHM74yqiPJWn7uB8lOaCZoHIaVUHE04yujOhJPBDvAsBIqjmY8DehIXAQ7wLASKo5mXAQ6EhfBDjCshIqjGReBjsRFsAMMK6HiaMZFoCNxEewAw0qoOBrxjSEdjYtgBxhWQsXRiG8M6WhcBDvAsBIqjkY8DehoXAQ7wLASKo5GXAQ6GhfBDjCshIqjCZ8P6IhcBDvAsBIqjiZ8PqAjchHsAMNKqDiaeDFQI0mV5S84VO+IZoLGYVgJFUcDHwyfDNRIUlV5GnAR7ADDSqg4GngpUCNJlQ3dFko0EzQOw0qoOA4uf2NyEeiIXAQ7wbASKo6Dy2ahJpKqG7otlGgmaByGlVBxHJinAR3V8POBRDNB4zCshIrjwDwN6IiyrodvCyWaCRqHYSVUHAfmItDR3LwEEs0EjcOwEiqOg/KTxDqaRy2BRDNB4zCshIrjoPL+KTWTVNGjl0CimaBxGFZCxXFQngZ0FIssgUQzQeMwrISK46BcBDqKRZZAopmgcRhWQsVxQD4f0JEMvyZ6H5oJGodhJVQcB+TzAR1J/mJDdT6MZoLGYVgJFccBeRrQUWQtuwgmg2ElVBwH5CLQUSz2fCDRTNA4DCuh4jiYvC3kItAR5N/QWOz5QKKZoHEYVkLFcTA+H9ARfC7kIqAavxnNBI3DsBIqjoPxNKDqVlkCiWaCxmFYCRXHwbgIVFkugRcC1faj0UzQOAwroeI4GP82sapa7SRwQjNB4zCshIrjYFwEqioXAdX0YmgmaByGlVBxHIyLQBWtfhpINBM0DsNKqDgO5kcDNZo0s9VPA4lmgsZhWAkVx8F8IlCjSbPKFxw+FKieF0UzQeMwrISK42BcBKpm0U8PPwvNBI3DsBIqjoN5OVCzSTPKJeAiKAbDSqg4DsZFoApOC2CxL5R7CJoJGodhJVQcB5MP3ajxpBnssgBOaCZoHIaVUHEcjItAM9vsNhChmaBxGFZCxXEgHwyfCtSA0t52Owmc0EzQOAwroeI4kFwE1IDS3nIJLPqV0regmaBxGFZCxXEgHwnUhNKeplgCiWaCxmFYCRXHgbwnUCNKe9r1ucA5mgkah2ElVBwHkl/fS40o7WX35wLnaCZoHIaVUHEcyDcHakZpL9OcBhLNBI3DsBIqjgNxEWg2LoIDwrASKo4D8SuoNZspHhKf0EzQOAwroeI4ED9MpplM87bQCc0EjcOwEiqOg8jPELgINJOpbgslmgkah2ElVBwH4ZfNaTYugoPCsBIqjgPwNKAZTXVbKNFM0DgMK6HiOABPA5pNngam+fzACc0EjcOwEiqO4vK3LheBZjPdbaFEM0HjMKyEiqM4XxnVjFwEB4ZhJVQcxXka0Iymez6QaCZoHIaVUHEU9h3Bh8SazZTPBxLNBI3DsBIqjsK8LaTZ5BKY8rZQopmgcRhWQsVRmLeFNJtpl0CimaBxGFZCxVGUnx3QTE4ngSlvCZ3QTNA4DCuh4ijK20KaQYkFcEIzQeMwrISKoyhPA9pTqQVwQjNB4zCshIqjoDwNuAi0l1wAU74e+jw0EzQOw0qoOAryIbH2UnYJJJoJGodhJVQcxfiQWHspvQQSzQSNw7ASKo5C8n6spwHtofwSSDQTNA7DSqg4CvFNIe0lFwHVZCk0EzQOw0qoOArxNKA9HOI0kGgmaByGlVBxFJGN+IlAjSqt6RCngUQzQeMwrISKo4hsRmpSaW2HOA0kmgkah2ElVBwFZCO6CLSHw9wWSjQTNA7DSqg4CnAJaC+HuS2UaCZoHIaVUHFMztOA9nSY00CimaBxGFZCxTE5l4D2cqjbQolmgsZhWAkVx8SyCf3sgPZwuCWQaCZoHIaVUHFMzNOA9pK1RzVZGs0EjcOwEiqOSXka0F4OeRpINBM0DsNKqDgm5RLQHg67BBLNBI3DsBIqjgllI74UqFGlNeQCSKX+0Mwomgkah2ElVBwTcgloS6clQLV4KDQTNA7DSqg4JpN/b8BFoC21WAKJZoLGYVgJFcdkXALaUi6Bwz4TuEQzQeMwrISKYzIuAm2pzWkg0UzQOAwroeKYSC4BF4G2kkvg0A+HL9FM0DgMK6HimIRvCmlL7ZZAopmgcRhWQsUxgVwC2ZjUsNLSWi6BRDNB4zCshIpjAi4BbaXtEkg0EzQOw0qoOHaWjemniLWVNm8IEZoJGodhJVQcO8ol4HMBbaX1aSDRTNA4DCuh4thJNmWihpXWkPVGtdgGzQSNw7ASKo4duAS0h9a3hRLNBI3DsBIqjg3lsdwloD1kzbW+LZRoJmgchpVQcWzktASoSaW1Ze1RXbZCM0HjMKyEimMDfk5Ae2t/WyjRTNA4DCuh4liZS0AzcBEEmgkah2ElVBwrcwloBi6CQDNB4zCshIpjRZ4GNAsXQaCZoHEYVkLFsRKXgGbiIgg0EzQOw0qoOFbiEtBMXASBZoLGYVgJFccKPA1oJlmLLoJAM0HjMKyEimMFLgHNJOuR6rQdmgkah2ElVBwLy6bzi+Q0g6zF1P4TxSc0EzQOw0qoOBbkLSHN4rQEqE7bopmgcRhWQsWxEL9CQjM4LQCfCQCaCRqHYSVUHAtwCWhvLoAHoJmgcRhWQsWxAJeA9nJaAD4HeACaCRqHYSVUHI+Uv4H5pya1NRfADWgmaByGlVBxPJKnAW3ptAAS1aOegWaCxmFYCRXHI2QzehrQ2j4XPhbyt39PAI9AM0HjMKyEiuNGviqqLeQSyF82qAY1iGaCxmFYCRXHjVwC2sLLgepPN6CZoHEYVkLFcSNvCWlNeRL4UHhnoPrTDWgmaByGlVBx3CBvC/k1ElrD6VbQOwLVnh6BZoLGYVgJFccNvC2kNeQSSFRzWgDNBI3DsBIqjkF+bkBrcQmsjGaCxmFYCRXHIE8DWkMuAW8HrYxmgsZhWAkVxyAXgZZ0uh30QqB604JoJmgchpVQcQxyEWgJLoAd0EzQOAwroeIY5CLQY2UN+S2hO6CZoHEYVkLFMchFoMfKGqLa0spoJmgchpVQcQxyEegxPA3siGaCxmFYCRXHAP8AjR7L08COaCZoHIaVUHEMyN/kqLmlh3IR7IhmgsZhWAkVxwBPA3oMbwvtjGaCxmFYCRXHABeBHsPTwM5oJmgchpVQcTxQ/ibnItBjuAh2RjNB4zCshIrjOU4PiF0CeixvC+2MZoLGYVgJFcczuAC0JBfBzmgmaByGlVBx3OP9wSWgJWU9Ua1pIzQTNA7DSqg47pHfAUPNLN3KRbAzmgkah2ElVBz3+P5AzSzd6nSrkepNG6CZoHEYVkLFcY/vC9TM0mOclkG+hEB1pxXRTNA4DCuh4rjH94avBmpm6bFcBjugmaBxGFZCxXEPF4HW5ltEG6OZoHEYVkLFcY9vC9S80lJcBBujmaBxGFZCxXGPd4U8vlMDS0vw1tDGaCZoHIaVUHE8g4tAa3IRbIxmgsZhWAkVxz38QJnW5iLYGM0EjcOwEiqOe7gEtDYXwcZoJmgchpVQcYD3BReB1uYi2BjNBI3DsBIqDvBXAjWutCQXwcZoJmgchpVQcVz49eGHAzWutCRfH90YzQSNw7ASKo4Lvyt8KVDjSkvI2465BFwEG6OZoHEYVkLFceb14e+HrwVqYOmxTkuA6k8ro5mgcRhWQsVx5teEnw7UwNISchFQ7WkDNBM0DsNKqDjO/N7w3wM1sLQEF8GOaCZoHIaVUHHceW3Ih8S/HKiBpSV4W2hHNBM0DsNKqDjufGvI20I+H9CaXAQ7opmgcRhWQsURXh3+dPhCoOaVluIi2BHNBI3DsBIqjvCN4Z8FTwNamx8i2xHNBI3DsBIqjvCHwy8EalxpSS6CHdFM0DgMK4Hi+JXhHwX/Gpm24CLYEc0EjcOwEiiO94afD9S00pLy1VEXwY5oJmgchpVcFMZbwz8IXwnUuNKS/AzBzmgmaByGlVwUxncFTwPaiotgZzQTNA7DSs6K4g0hTwM+G9BWXAQ7o5mgcRhWclYUvyn8j0ANK63BRbAzmgkah2EldwXxqvCh4LMBbckPk+2MZoLGYVjJXUG8JvxI8ANk2srnwrvDU4NJ26KZoHEYVnJXEG8Pnw4uAm3l5fDUUNL2aCZoHIaV3BVEvsv92eAi0FZ8PjABmgkah2EldwXxvvBfAzWstIb3hKeGkrZHM0HjMKwkiuF14QeD3zSqreRtIRfBBGgmaByGlUQx/LrwF4J/oF5byQfFV0NJ26OZoHEYVnJXED8RfD6grbwYnhpI2gfNBI3DsJK7gvi+8MlATSst7YXw1EDSPmgmaByGlZwVRd63paaVlpS3hd4RzmtPO6GZoHEYVnJWFJ8K1LjSkvLkeV532hHNBI3DsJKzovhgoMaVluTnByZCM0HjMKzkrCg+GqhxpSX5/UIToZmgcRhWclYU+ZsaNa60lKwxF8FEaCZoHIaV3BVENqeLQGvzttBkaCZoHIaV3BWES0BbcBFMhmaCxmFYSRSDpwFtxUUwGZoJGodhJVEMuQioaaWluQgmQzNB4zCsJIrBRaCtuAgmQzNB4zCsJIrBRaCtuAgmQzNB4zCsJIrB5wPaStaay2AiNBM0DsNKohhcBNqSi2AiNBM0DsNKohhcBNpS1lv+adSroaTt0UzQOAyriELw1VFtzRPBRGguaByGVUQhuAS0NRfBRGguaByGVUQhuAi0NRfBRGguaByGVUQhuAi0NRfBRGguaByGVUQhuAi0tXwudTWQtA+aCxqHYQVRBNmQLwVqVmktLoKJ0GzQOAwriCJwCWhreQL11dGJ0GzQOAxnFwWQf5Yy/3YsNau0Fp8PTIbmg8ZhOLO4+D8a/EP12oOLYDI0IzQOw1nFhc8l8OlATSqtzUUwGZoTGofhjOKieztIe3MRTIZmhcZhOJu44L4hpBm4CCZD80LjMJxJXOxsPpeAZuAimAzNDI3DcBZxoV0CmomLYDI0NzQOwxnERc6mezFQQ0p7yJr0cwQTodmhcRjuLS6wS0Cz8lQwEZofGofh3uICuwQ0KxfBRGh+aByGe4qL6xtCmlkuAr9vaBI0QzQOw73FBXYRaGaeCiZB80PjMNxbXGAXgWaWi+Bd4WowaVs0PzQOw73FBXYRaHbfG64Gk7ZF80PjMNxTXNz8KgkXgWb21fDHwtVg0rZohmgchnuJC/v64BLQ7HIR/OXwxnA1nLQdmiMah+Fe4sL62qgq+Fr4u+FN4Wo4aTs0RzQOw73EhfU0oApyEXwivDlcDSdth+aIxmG4l7iwLgJV8a/D28PVcNJ2aI5oHIZ7iIua3+GSr+VR00mz+S/hN4er4aTt0CzROAz3EBc1FwE1nDSjXwwvhKvhpO3QLNE4DPcQF9UTgSr5Svhr4dXhakBpGzRLNA7DvcSFdRGokpfDW8LVgNI2aI5oHIZ7iQvrqUCVfD58S7gaUNoGzRGNw3BPcXHzmx1dBqrg/4R3h6sBpW3QDNE4DPcWF9hFoAr+b/g94WpAaRs0PzQOw73FBc5bRH6mQLP7Uvj94WpAaRs0PzQOwxnERXYRaHa5CL4rXA0obYNmh8ZhOIO4yH7vkGaXi+APhKsBpW3Q7NA4DGcQF9lFoNnlIvjucDWgtA2aHRqH4QziIvvAWLP7cvBEsCOaHRqH4QziIvsaqWbnM4Kd0ezQOAxnERfaRaCZ5SJ4b7gaUNoGzQ2Nw3AWcaFdBJpZfo7gfeFqQGkbNDc0DsNZxIV2EWhm+Yzge8LVgNI2aG5oHIaziAvtItDM8htI/3x4VbgaUlofzQ2Nw3AWcaFdBJpZ/snKvxVeE66GlNZHc0PjMJxFXGgXgWb3E+FXhKshpfXR3NA4DGcRF9qvpdbsPhveEa6GlNZHc0PjMJxJXGwXgWb238LvCFdDSuujmaFxGM4kLnYuApeBZvXF8P7gA+Md0MzQOAxnExfcRaBZ5ZtDfyn4wHgHNC80DsOZxMX2qyY0s3xz6O+FN4WrQaV10czQOAxnEhfbJaCZ5SL48fDacDWotC6aGRqH4SziQvvWkGaXi+DfhNeFq0GlddHc0DgMZxIXOxfBCTWitLefCb82XA0qrYtmhsZhOKO46D4r0Kz+Z/gz4WpQaV00KzQOw1nFhXcRaEb5LaR/J1wNKq2L5oTGYTiruPAuAs0onxP8y/DWcDWstB6aExqH4aziwvvwWLP6pfBN4WpYaT00JzQOw1nEhf7O8PF0lrkINKs/GJ4aVFrX+bzQ7TCcRVzoj4RssM/nv7/L8lRw2YDSDP52eGpQaV2XM0O3wXAGcZHfEk6LID05FcS/vnCWSTP5XHhqUGldl3NDt8FwBnGRcxGcN9mTW0ThB84yaSYugo3R7NA4DGcQF/nNgZpNmpWLYGM0OzQOwxnERc6/+kTNJs0qF4F/pGZDNDs0DsMZxEXORZDvZ1PDSbPKZ1hXA0vroNmhcRjuLS5w/pGPbwwuAlXjItgQzQ+Nw3BvcYHfFv55cBGomhfD1cDSOmh+aByGe4sLnIvgX4TTIvho8I0hVeAD4w3R/NA4DPcWF/hXh38VchHk8D99hsBloNm5CDZ0OTt0Gwz3Fhf4V4U/F34ofPfFf5b3YHMhfDL8u0DNKO0lF0F+BuapgaV1nM8G3Q7DKqIQ/BsFmk3W49XA0jpoLmgchpVEMbgMNJOsxfw+rKuhpeXRTNA4DCu5KwgXgWbiItgIzQSNw7CSu4Lw7xRoJt4e2gjNBI3DsJKzosjmcxloBi6CjdBM0DgMK7koDBeBZpB16O2hDdBM0DgMK7koDB8caxaeCjZAM0HjMKwEisNFoBm4CDZAM0HjMKwEisMHx5pB1qC3h1ZGM0HjMKyEiiO4CDQDF8HKaCZoHIaVUHEETwWaQT6zovrUQmgmaByGlVBx3HERaG9Zg1SbWgjNBI3DsBIqjjsuAu0p688TwcpoJmgchpVQcdzJ20PUoNIWPA1sgGaCxmFYCRXHHZ8TaE9Zez4sXhnNBI3DsBIqjjMuAu3JRbAymgkah2ElVBxnXATak88IVkYzQeMwrISK40w2IjWotAUXwcpoJmgchpVQcZzxOYH2lLVHdamF0EzQOAwroeK44CLQXjwRrIxmgsZhWAkVxwUXgfaQdeciWBnNBI3DsBIqjgsuAu3B20IboJmgcRhWQsVxwUWgPWTd+froymgmaByGlVBxXPDNIe3FW0Mro5mgcRhWQsVxIX8royaV1ubtoZXRTNA4DCuh4rjgK6Tai4tgZTQTNA7DSqg4gItAe/A5wcpoJmgchpVQcQAXgfbiqWBFNBM0DsNKqDiAi0B7cRGsiGaCxmFYCRUH8DmB9pJ1l3yDaAU0EzQOw0qoOO7hItCeTgshUX3qBjQTNA7DSqg47uEi0AyyDn2AvBCaCRqHYSVUHPdwEWgW3iZaCM0EjcOwEiqOe/icQDPIGnQRLIRmgsZhWAkVxzO4CLS3rEGqTd2AZoLGYVgJFcczuAi0t6xBnxEshGaCxmFYCRXHM2QDUnNKW3IRLIRmgsZhWAkVxzP4nEAz8PbQQmgmaByGlVBxPIeLQHtzESyEZoLGYVgJFcdzuAi0NxfBQmgmaByGlVBxPIe3h7S3rD+fEyyAZoLGYXh0UUAuAu1tilMB9Yf6wfDoogFcBNqbi0DTwPDoogG8PaS9uQg0DQw7iCZwEWhPWX+7Pyeg3lA/GHYQTeAi0N52PxVQb6gfDDuIJsjfxqg5pa3sfiqg3lA/GHYQTeBzAs1g11MB9Yb6wbCLaAQXgfbmItDuMOwiGsFFoL1lDe52e4j6Qv1g2EU0gotAM9jtVEB9oX4w7CIawecEmsFupwLqC/WDYSfRDC4CzWCXUwH1hPrBsJNohmxAl4H25iLQbjDs5K4hXATaW9bg5n/UnnpC/WDYyV1DeCrQDDY/FVBPqB8MOzlrCheB9rb5qYB6Qv1g2MlZU7gINIOsw81OBtQT6gfDTs6awkWgWZyWweqvlFJPqB8MOzlrimw6akppL6ufDKgn1A+GnZw1hR8u02yyHld9ZkA9oX4w7OSiMVwEms2qy4B6Qv1g2MlFY7gINKOsy7T4MwPqCfWDYScXjeHtIc0sa/OyZh+FekL9YNgJNIeLQLPK2lz0NhH1hPrBsBNojmw2l4FmdarPRRYC9YT6wbATao7gItDsFlkG1BPqB8NOqDmCi0AVZJ0+6gEy9YT6wbATao7gQ2NVkXVKNfwg1BPqB8NOqDnuZIO5DDS7R50KqCfUD4adUHOccRGogptPBdQT6gfDTqg5zrgIVMHNpwLqCfWDYSfUHGd8VqAqbjoVUE+oHww7oea44CJQBVmnw8uAekL9YNgJNccFF4GqyFod+mwB9YT6wbATao4L3h5SJVmrD35eQD2hfjDshJoDuAhUyYOXAfWE+sGwE2oO4CJQNQ9aBtQT6gfDTqg5LnhrSFU9dxlQT6gfDDuh5riQD9+oyaQKnrkMqCfUD4adUHNccBGoulwG+DYR9YT6wbATao4L3hrSEWQNnxbCK0uBekL9YNjJqSGeIxvHZaCjyFp+UtvUE+oHw05ODfEALgIdRdbyk+cG1BPqB8NOshkeyFtEOpInpwLqCfWDYSfZDAO8RaSjyDp+cjKgvlAvGHYSjTDq1EDUXFI1WcsfoN5QHxh2Ek1wCxeBjsRl0ByGnUQD3OK3BZeBKsq6veTtoeYw7CSa4FbZQNRo0qyyZp/6YBn1hPrBsJPzpnigt4U/FX4kULNJWzv/7f5cDv182y3/9fSiw1P1TD2hfjDs5LIxHuB14cPhC4GaUlrb+bDPQf/kMwG3oJ5QPxh2Qs3xAPmM4D8GalJpDZfD/7Imb0I9oX4w7ISa4wHeGn48fC1Q00pLOi0AqsVHoZ5QPxh2Qs3xAK8KHwlfCtS40hIWPwFcop5QPxh2Qs3xQO8K/zlQA0uPcVoAT73hswbqCfWDYSfUHA/02vBD4YuBmlm6xWkJUM0tjnpC/WDYCTXHgDyyfzb4rECPdVoAq90GItQT6gfDTqg5BrwhfCz8UqDmlp5nlwVwQj2hfjDshJpj0G8N/yFQk0vkNPx3WwAn1BPqB8NOqDkG5bOCvxj+d6Cml07OFwDV0uaoJ9QPhp1Qc9zgW8JvD+8P2eQ0BNTXafjv+ts/oZ5QPxh2Qs1xg1eHt9/9+9N3utBAUC/TLoAT6gn1g2En1Bw3es3Zvz8NABoOOr7T9V/9cwCPRT2hfjDshJpjIS6DXk7Xu8QCOKGeUD8YdkLNsSBvE/VwWgBUA1OjnlA/GHZCzbEwl8GxlV0CiXpC/WDYCTXHCk7DggaJ6iq9BBL1hPrBsBNqjpXkmyMvhM/docGiOsovgUQ9oX4w7ISaYwMvBpdBXYdYAol6Qv1g2Ak1x0ZyGSQaNJpXXrMybwU9D/WE+sGwE2qODeVQ+WSggaP5vBwOswQS9YT6wbATao6N/aHwmUCDR/P4yfBbAl3Dsqgn1A+GnVBz7CAXgbeJ5vSV8A/DGwNdu9KoJ9QPhp1Qc+wk/wayD5DnkX9s6Avhb4b8hlm6ZuVRT6gfDDuh5tjRh0Leh6bBpO3kKeBnw/eHNwe6VodAPaF+MOyEmmNn7wmeDPbz5ZC36v5oeFOga3QY1BPqB8NOqDkmcPrgGQ0qreer4afDe8PrAl2bQ6GeUD8YdkLNMQmXwbbymcC/D/kW1/lXih8a9YT6wbATao6J5JtELoNtfD58T2hxEjihnlA/GHZCzTEZl8H6/lf4q+Gtga7BYVFPqB8MO6HmmJDLYD35cPifhneGVwX6+R8W9YT6wbATao5J5TLw1dJl5XOBnwv5tRGH/azAs1BPqB8MO6HmmFh+46WfQF5Ongb+SfjWQD/vw6OeUD8YdkLNMblcBjTUNC4/OfzR8PpAP+vDo55QPxh2Qs0xufwDNy6DZfxM+N2Bfs4tUE+oHww7oeYowGXwePl8IJ+5/IZAP+MWqCfUD4adUHMU4R/Ff5xcBD8W3hbo59sC9YT6wbATao5CXAa3y0Xw4dDqA2SXqCfUD4adUHMU4zK4TX7D6O8L9DNtg3pC/WDYCTVHQbkIXAZjfjh8U6CfZxvUE+oHw06oOYpyETxc/qz+eKCfYyvUE+oHw06oOYpyETxc/qzoZ9gO9YT6wbATao6iXAQPkz+nfK5CP8N2qCfUD4adUHMUlQPOZfBsp58R/fxaop5QPxh2Qs1R2OkNIhfCNZcAoJ5QPxh2Qs1xAC6Cp7kE7kE9oX4w7ISa4wD8CoqnuQTuQT2hfjDshJrjIFwE//8kkIuRfkbtUU+oHww7oeY4iK6ngtPwP6Gfje5QT6gfDDuh5jiQLovgNPTzYbm//Q+gnlA/GHZCzXEgHU4FpwVA//x6DuoJ9YNhJ9QcB3PkReASeCTqCfWDYSfUHAdz1EWQ/1yJ/pn1QNQT6gfDTqg5DuY7Ag3S6lwCC6CeUD8YdkLNcTAfCTRIq3MRLIB6Qv1g2Ak1x8F8LNAgrc5nAwugnlA/GHZCzXEwHwo0SCvL04CviS6AekL9YNgJNcfBvCPQMK3M20ILoZ5QPxh2Qs1xMO8ONEyryiXgbaGFUE+oHww7oeY4mNeHlwIN1Yo8DSyIekL9YNgJNccB5fCkoVqNp4GFUU+oHww7oeY4oBcDDdZqPA0sjHpC/WDYCTXHAb0QaLBW4yJYGPWE+sGwE2qOA/rm8LlAw7USbwstjHpC/WDYCTXHQb0caLhW4iJYGPWE+sGwE2qOg8ohSsO1irwt5IfIFkY9oX4w7ISa46Cq/20Cnw+sgHpC/WDYCTXHgbkI9BTqCfWDYSfUHAfmItBTqCfUD4adUHMcWOVF4IPiFVBPqB8MO6HmOLCqiyD/d7sIVkA9oX4w7ISa48CqPjD2ttBKqCfUD4adUHMcnItAr6CeUD8YdkLNcXAVF4G3hVZCPaF+MOyEmuPgKt4e8oNkK6GeUD8YdkLN0UClRZD/W10EK6GeUD8YdkLN0UC1RUD/DFoA9YT6wbATao4GKt0echGsiHpC/WDYCTVHEy4CYU+oHww7oeZootIi8BnBSqgn1A+GnVBzNFHpa6ldBCuhnlA/GHZCzdFEpUXg5whWQj2hfjDshJqjiUqLwOcEK6GeUD8YdkLN0YSLQNgT6gfDTqg5mqjysDi5CFZCPaF+MOyEmqMJF4GwJ9QPhp1QczRQ6QNlyUWwEuoJ9YNhJ9QcDVR6PpBcBCuhnlA/GHZCzdFApdNAyv+9fpZgBdQT6gfDTqg5Gqh2IkieClZAPaF+MOyEmqOBqovAU8HCqCfUD4adUHM0kAOVhu3sPBUsjHpC/WDYCTVHA9XeGjpxESyMekL9YNgJNUcTVRdB3taifx7dgHpC/WDYCTVHE54KhD2hfjDshJqjkaqLwIfGC6GeUD8YdkLN0YinguaoJ9QPhp1QczSTQ7XaMvBUsBDqCfWDYSfUHA1VPRW4DB6JekL9YNgJNUdDFU8FyWXwSNQT6gfDTqg5mqq4CJLL4BGoJ9QPhp1QczRV9VSQ8n83/TPpOagn1A+GnVBzNOYiaIZ6Qv1g2Ak1R2MugmaoJ9QPhp1QczRW9XMFfu3Ejagn1A+GnVBzNOciaIR6Qv1g2Ak1R3MvBRq2M/OtoRtRT6gfDDuh5mjuQ4GG7cxcBDeinlA/GHZCzdHcpwIN25m5CG5EPaF+MOyEmqO5TwcatjNzEdyIekL9YNgJNUdjrw8ugkaoJ9QPhp1QczT2nkCDdnYughtRT6gfDDuh5mjsBwIN2tm5CG5EPaF+MOyEmqOpt4SKt4WSi+BG1BPqB8NOqDmaqvi20ImL4EbUE+oHw06oOZp4Vfidd/8+PztQ9TSQ/K6hG1FPqB8MO6HmaCIXQS6AnwvfGWjAVpBLwEVwI+oJ9YNhJ9QcTbwhfDz8QqABW4VL4BGoJ9QPhp1QczTxzvCPwy8HGrCzO50E/MK5R6CeUD8YdkLN0cBrwp8M/yl8LdCgnZm3gxZCPaF+MOyEmqOBbws/Fn4x0KBdw2l4j7jvv8O3hBZCPaF+MOyEmuPg8tnAnwifCV8Ol8N2CefD/Nbhnf//edsn3frfoeegnlA/GHZCzdFAfnjsj4SfCl8MNMxHPWboayfUE+oHw06oORp5R/gb4efDrc8KHP6FUU+oHww7oeZo5s3hwyEfHH8lnA/39MGL//vyP3cBFEY9oX4w7ISao6E3hj8bfjbka6X3DffM8569w/8gqCfUD4adUHM09dbwgxeZDo56Qv1g2Ak1R1P5lRO/8SLTwVFPqB8MO6HmaOzVkOnAqCfUD4aSpD4wlCT1gaEkqQ8MJUl9YChJ6gNDSVIfGEqS+sBQktQHhpKkPjCUJPWBoSSpDwwlSX1gKEnqA0NJUh8YSpL6wFCS1AeGkqQ+MJQk9YGhJKkPDCVJfWAoSeoDQ0lSHxhKkvrAUJLUxde/4f8BcBqO0JHaMRwAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </foreignObject>
  );
}
