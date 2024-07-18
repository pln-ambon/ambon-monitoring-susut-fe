"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Droplets } from "lucide-react";
import { ThermometerSnowflake } from "lucide-react";

import CloudRender from "./CloudRender";

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
    console.log(weatherPasso, "<< weather passo");
    
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

  return (
    <foreignObject width="100%">
      <svg
        width="100%"
        viewBox="0 0 3546 1615"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.504395"
          y="182.65"
          width="2227.72"
          height="1431.82"
          fill="url(#pattern0_27_3)"
        />
        <path
          d="M1644.36 849.959L1638.14 880.423"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M2025.99 432.363H1990.45V467.9H2025.99V432.363Z"
          fill="#89E24E"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1957.33 481.277L1921.28 513.37"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1921.29 513.358L1925.25 577.61"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1925.24 577.61L1915.79 638.832"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1915.8 638.848L1895.01 696.678"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1895.02 696.654L1853.44 730.671"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1853.44 730.676L1785.41 738.235"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1785.41 738.236L1707.91 746.848"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1649.19 739.824L1623.85 738.975"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1625.75 738.248L1586.83 753.366"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1588.3 752.78L1554.69 776.022"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1554.67 776.041L1526.33 793.047"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1528.8 791.549L1500.71 797.261"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1503.64 797.228L1473.58 797.611"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1475.49 797.612L1441.53 795.394"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1443.36 794.936L1404.28 804.801"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1405.55 804.386L1356.09 820.391"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1358.33 819.495L1301.63 842.174"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1303.11 841.578L1248.72 870.517"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1251.07 869.304L1197.7 898.868"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1199.15 898.062L1142.87 929.114"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1144.5 928.212L1098.47 958.144"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1098.46 958.159L1046.51 983.916"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1046.51 983.905L995.485 1002.8"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M995.489 1002.8L972.419 1025.88"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M972.414 1025.88L965.066 1056.56"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1668.07 742.02L1649.23 739.828"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1672.36 762.619L1653.49 769.298"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1654.83 768.478L1634.26 781.094"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1635.31 780.456L1622.68 801.001"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1623.54 799.57L1618.04 819.462"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1618.51 817.743L1622.84 851.682"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1659.9 944.637L1683.18 990.149"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1682.63 989.071L1681.56 1037.77"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1681.6 1035.61L1658.94 1064.7"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1660.59 1063.04L1619.84 1093.15"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1621.96 1091.61L1586.47 1126.52"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1588.23 1124.76L1542.76 1158.52"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1542.76 1158.52L1499.04 1190.52"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1500.95 1189.13L1447.13 1208.79"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1346.98 910.208L1354.54 934.778"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1353.88 932.619L1354.48 949.929"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1356.43 948.004L1335.64 957.455"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1338.49 956.852H1305.15"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1307.3 956.308L1273.29 965.014"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1274.36 964.734L1239.25 973.722"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1240.44 973.415L1205.23 982.429"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1206.84 982.014L1175.57 994.187"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1178.89 992.868L1145.14 1008.85"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1147.6 1007.69L1116.43 1026.99"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1118.34 1025.79L1087.7 1045.14"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1089.39 1044.07L1058.9 1062.79"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1061.72 1061.54L1024.11 1078.15"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1026.74 1077H978.271"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1483.57 966.379L1464.15 985.801"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1504.99 965.617L1480.39 967.468"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1522.34 970.871L1503 965.765"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1543.88 966.919L1520.78 970.454"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1577.15 942.388L1541.82 967.238"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1610.17 909.365L1575.95 943.58"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1638.77 879.751L1606.06 913.478"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1639.07 893.38L1660.5 946.111"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1622.58 849.651L1639.71 895.09"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1642.93 819.501L1644.44 851.625"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1651.81 793.047L1643.49 821.399"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1668.06 777.926L1651.05 794.934"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1684.87 767.157L1666.55 779.436"
          stroke="#FF9900"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M2025.99 432.358L2106 350"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M2025.98 518.66L2106 586"
          stroke="black"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M1949.64 458.556L1839 373"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M1681.3 730.691L1571 644"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M1450.74 1229.58L1526 1282"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M940.604 1068.46L816 989"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M1943.96 477.236L1908.83 508.633"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1908.82 508.635L1912.98 576.481"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1912.97 576.478L1904.28 636.195"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1904.28 636.204L1884.63 689.112"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1884.62 689.111L1849.47 719.344"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1849.48 719.339L1770.11 728.788"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1770.1 728.795L1705.86 735.673"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1962.25 487.515C1974.07 487.515 1983.65 477.931 1983.65 466.109C1983.65 454.286 1974.07 444.702 1962.25 444.702C1950.42 444.702 1940.84 454.286 1940.84 466.109C1940.84 477.931 1950.42 487.515 1962.25 487.515Z"
          fill="#FF0000"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2025.99 483.127H1990.45V518.664H2025.99V483.127Z"
          fill="#89E24E"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1668.29 752.556L1648.23 759.779"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1650.13 759.09L1625.13 773.701"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1627.13 772.532L1611.37 795.869"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1612.19 794.662L1605.97 818.837"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1606.24 817.774L1610.12 852.157"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1645.83 944.23L1670.71 991.842"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1670.53 1030.02L1649.73 1056.67"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1650.49 1055.69L1606.44 1088.23"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1608.55 1086.7L1573.06 1121.62"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1574.82 1119.85L1529.34 1153.62"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1529.35 1153.62L1490.86 1180.82"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1493.43 1179.91L1451.1 1194.83"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1623.84 887.532L1646.96 946.421"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1609.48 850.491L1624.57 889.374"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1434.35 1229.57C1446.18 1229.57 1455.76 1219.99 1455.76 1208.17C1455.76 1196.34 1446.18 1186.76 1434.35 1186.76C1422.53 1186.76 1412.95 1196.34 1412.95 1208.17C1412.95 1219.99 1422.53 1229.57 1434.35 1229.57Z"
          fill="#FF0000"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1476.07 980.134H1440.53V1015.67H1476.07V980.134Z"
          fill="#FF9900"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1356.26 872.786H1320.72V908.323H1356.26V872.786Z"
          fill="#FF9900"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1476.06 1015.67L1634 1122"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M1649.79 727.958L1621.68 727.016"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1621.67 727.021L1579.22 742.976"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1581.11 742.257L1548.32 765.744"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1550.76 763.801L1519.98 782.749"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1522 781.996L1497.97 785.434"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1499.83 785.167L1465.17 785.433"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1467.07 785.439L1439.33 783.628"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1442.21 783.81L1396.88 794.927"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1399.1 794.392L1348.68 810.058"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1351.11 809.305L1297.66 830.846"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1297.66 830.847L1244.75 859.193"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1246.28 858.369L1191.08 888.291"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1192.34 887.606L1137.05 917.764"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1139.04 916.671L1091.68 948.002"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1091.69 948.002L1042.55 972.569"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1042.56 972.57L990.402 992.222"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M990.386 992.226L962.714 1019"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M962.733 1018.99L951.849 1057.6"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1670.76 731.109L1643.54 727.741"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1320.7 872.778L1205.06 794.934"
          stroke="white"
          stroke-width="1.33333"
          stroke-miterlimit="3"
          stroke-linecap="square"
          stroke-dasharray="16 16"
        />
        <path
          d="M1686.34 767.199C1698.16 767.199 1707.75 757.615 1707.75 745.793C1707.75 733.971 1698.16 724.387 1686.34 724.387C1674.52 724.387 1664.93 733.971 1664.93 745.793C1664.93 757.615 1674.52 767.199 1686.34 767.199Z"
          fill="#FF0000"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M956.894 1097.29C968.717 1097.29 978.3 1087.7 978.3 1075.88C978.3 1064.06 968.717 1054.48 956.894 1054.48C945.072 1054.48 935.488 1064.06 935.488 1075.88C935.488 1087.7 945.072 1097.29 956.894 1097.29Z"
          fill="#FF0000"
          stroke="black"
          stroke-width="3.99999"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1670.13 990.744L1669.22 1033.15"
          stroke="#FF0000"
          stroke-width="5.33332"
          stroke-miterlimit="3"
        />
        <path
          d="M1669.2 1008.48C1671.71 1008.48 1673.74 1006.37 1673.74 1003.76C1673.74 1001.15 1671.71 999.032 1669.2 999.032C1666.7 999.032 1664.67 1001.15 1664.67 1003.76C1664.67 1006.37 1666.7 1008.48 1669.2 1008.48Z"
          fill="#FF0000"
          stroke="#F2F2F2"
          stroke-width="0.999998"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1682.04 1020.77C1684.55 1020.77 1686.58 1018.65 1686.58 1016.04C1686.58 1013.43 1684.55 1011.32 1682.04 1011.32C1679.54 1011.32 1677.51 1013.43 1677.51 1016.04C1677.51 1018.65 1679.54 1020.77 1682.04 1020.77Z"
          fill="#FF0000"
          stroke="#F2F2F2"
          stroke-width="0.999998"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1467.75 801.552C1470.25 801.552 1472.29 799.437 1472.29 796.828C1472.29 794.219 1470.25 792.104 1467.75 792.104C1465.24 792.104 1463.21 794.219 1463.21 796.828C1463.21 799.437 1465.24 801.552 1467.75 801.552Z"
          fill="#FF0000"
          stroke="#F2F2F2"
          stroke-width="0.999998"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1477.2 789.459C1479.71 789.459 1481.74 787.344 1481.74 784.735C1481.74 782.126 1479.71 780.011 1477.2 780.011C1474.7 780.011 1472.67 782.126 1472.67 784.735C1472.67 787.344 1474.7 789.459 1477.2 789.459Z"
          fill="#FF0000"
          stroke="#F2F2F2"
          stroke-width="0.999998"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1905.04 636.2C1907.55 636.2 1909.58 634.084 1909.58 631.475C1909.58 628.866 1907.55 626.751 1905.04 626.751C1902.54 626.751 1900.51 628.866 1900.51 631.475C1900.51 634.084 1902.54 636.2 1905.04 636.2Z"
          fill="#FF0000"
          stroke="#F2F2F2"
          stroke-width="0.999998"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1912.6 653.207C1915.11 653.207 1917.14 651.092 1917.14 648.483C1917.14 645.874 1915.11 643.759 1912.6 643.759C1910.1 643.759 1908.07 645.874 1908.07 648.483C1908.07 651.092 1910.1 653.207 1912.6 653.207Z"
          fill="#FF0000"
          stroke="#F2F2F2"
          stroke-width="0.999998"
          stroke-miterlimit="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="21.7886"
          y="1.2334"
          width="514.602"
          height="603.923"
          fill="url(#pattern1_27_3)"
        />
        <rect
          x="2379.29"
          y="0.499023"
          width="1166.52"
          height="1021.2"
          fill="url(#pattern2_27_3)"
        />
         {/* weather */}
         {
          weatherSirimau?.weather[0] && (
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
          )
         }

         {
          weatherPasso?.weather[0] && (
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
          )
         }

         {
          weatherHativeBesar?.weather[0] && (
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
          )
         }

         {
          weatherWaai?.weather[0]?.main && (
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
          )
         }

        {/* Arus */}
        <foreignObject x="1770" y="560" width="125" height="200">
          <div className="bg-green-200 font-semibold px-4 border-4 border-white text-2xl  flex flex-col gap-2 bg-opacity-80 rounded-xl">
            <span className="font-semibold">LINE 1</span>
            <span>{roundNumber(data?.["GI WAAI"]?.current1)} A</span>
          </div>
        </foreignObject>

        <foreignObject x="1920" y="650" width="125" height="200">
          <div className="bg-green-200 font-semibold px-4 border-4 border-white text-2xl  flex flex-col gap-2 bg-opacity-80 rounded-xl">
            <span className="font-semibold">LINE 2</span>
            <span>{roundNumber(data?.["GI WAAI"]?.current2)} A</span>
          </div>
        </foreignObject>

        <foreignObject x="1350" y="710" width="125" height="200">
          <div className="bg-green-200 font-semibold px-4 border-4 border-white text-2xl  flex flex-col gap-2 bg-opacity-80 rounded-xl">
            <span className="font-semibold">LINE 1</span>
            <span>{roundNumber(data?.["GIS PASSO"]?.current1)} A</span>
          </div>
        </foreignObject>

        <foreignObject x="1470" y="800" width="125" height="200">
          <div className="bg-green-200 font-semibold px-4 border-4 border-white text-2xl  flex flex-col gap-2 bg-opacity-80 rounded-xl">
            <span className="font-semibold">LINE 2</span>
            <span>{roundNumber(data?.["GIS PASSO"]?.current2)} A</span>
          </div>
        </foreignObject>

        <foreignObject x="1540" y="930" width="125" height="200">
          <div className="bg-green-200 px-4 border-4 font-semibold border-white text-2xl  flex flex-col gap-2 bg-opacity-80 rounded-xl">
            <span className="font-semibold">LINE 1</span>
            <span>{roundNumber(data?.["GIS PASSO"]?.current3)} A</span>
          </div>
        </foreignObject>

        <foreignObject x="1690" y="1020" width="125" height="200">
          <div className="bg-green-200 px-4 border-4 font-semibold border-white text-2xl  flex flex-col gap-2 bg-opacity-80 rounded-xl">
            <span className="font-semibold">LINE 2</span>
            <span>{roundNumber(data?.["GIS PASSO"]?.current4)} A</span>
          </div>
        </foreignObject>

        {/* pembangkit */}
        <foreignObject x="30" y="30" width="800" height="200">
          <div className="p-8 text-4xl flex flex-col gap-2">
            <i className="font-bold">LAST UPDATE</i>
            <i className="underline">{data?.date}</i>
          </div>
        </foreignObject>
        <foreignObject x="2100" y="260" width="400" height="200">
          <div className="bg-gray-200 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">PLTMG AMBON PEAKER</span>
            <span>BEBAN: {roundNumber(data?.["PLTMG WAAI"]?.pTotal)} MW</span>
          </div>
        </foreignObject>
        <foreignObject x="2110" y="590" width="350" height="200">
          <div className="bg-gray-200 p-4 border border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">BMPP</span>
            <span>BEBAN: {roundNumber(data?.["BMPP WAAI"]?.pTotal)} MW</span>
          </div>
        </foreignObject>
        <foreignObject x="905" y="685" width="300" height="200">
          <div className="bg-gray-200 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">PLTD POKA</span>
            <span>BEBAN: {roundNumber(data?.["PLTD POKA"]?.pTotal)} MW</span>
          </div>
        </foreignObject>
        <foreignObject x="1630" y="1120" width="300" height="200">
          <div className="bg-gray-200 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">PLTD HATIVE</span>
            <span>
              BEBAN: {roundNumber(data?.["PLTD HATIVE KECIL"]?.pTotal)} MW
            </span>
          </div>
        </foreignObject>
        {/* gi */}
        <foreignObject x="1440" y="265" width="400" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI WAAI</span>
            <span>TEGANGAN: {roundNumber(data?.["GI WAAI"]?.vAverage)} KV</span>
          </div>
        </foreignObject>
        <foreignObject x="1520" y="1280" width="400" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI SIRIMAU</span>
            <span>BEBAN: {roundNumber(data?.["GI SIRIMAU"]?.pTotal)} MW</span>
            <span>
              TEGANGAN: {roundNumber(data?.["GI SIRIMAU"]?.vAverage)} KV
            </span>
          </div>
        </foreignObject>
        <foreignObject x="460" y="840" width="350" height="200">
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
        <foreignObject x="1220" y="500" width="350" height="200">
          <div className="bg-indigo-100 p-4 border-4 border-white text-3xl  flex flex-col gap-2 bg-opacity-80">
            <span className="font-semibold">GI PASSO & GIS PASSO</span>
            <span>
              BEBAN: {roundNumber(data?.["GIS PASSO"]?.pTotal)}
              MW
            </span>
            <span>
              TEGANGAN: {roundNumber(data?.["GIS PASSO"]?.vAverage)}
              KV
            </span>
          </div>
        </foreignObject>
        <defs>
          <pattern
            id="pattern0_27_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_27_3"
              transform="scale(0.000598444 0.000931099)"
            />
          </pattern>
          <pattern
            id="pattern1_27_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image1_27_3"
              transform="scale(0.00259067 0.00220751)"
            />
          </pattern>
          <pattern
            id="pattern2_27_3"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image2_27_3"
              transform="scale(0.00114286 0.00130548)"
            />
          </pattern>
          <image
            id="image0_27_3"
            width="1671"
            height="1074"
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="image1_27_3"
            width="386"
            height="453"
            xlinkHref="data:image/png;base64,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"
          />
          <image
            id="image2_27_3"
            width="875"
            height="766"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </foreignObject>
  );
}
