import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "@tanstack/react-query";

import { getDataTrend } from "@/api/data_trend";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

export default function LineChart() {
  const { data: dataTrend } = useQuery({
    queryKey: ["/data_trend"],
    queryFn: () => getDataTrend(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  const data = {
    labels: dataTrend?.["PLTMG WAAI"]?.labels,
    datasets: [
      {
        label: "PLTD HATIVE",
        data: dataTrend?.["PLTD HATIVE KECIL"]?.datasets,
        borderColor: "rgb(209, 207, 226)",
        backgroundColor: "rgba(209, 207, 226, 0.9)",
        borderWidth: 2,
        yAxisID: "y",
        fill: true,
        tension: 0,
      },
      {
        label: "PLTD POKA",
        data: dataTrend?.["PLTD POKA"]?.datasets,
        borderColor: "rgb(212, 175, 185)",
        backgroundColor: "rgba(212, 175, 185, 0.9)",
        borderWidth: 2,
        yAxisID: "y",
        fill: "origin",
        tension: 0,
      },
      {
        label: "BMPP",
        data: dataTrend?.["BMPP WAAI"]?.datasets,
        borderColor: "rgb(126, 196, 207)",
        backgroundColor: "rgba(126, 196, 207, 0.9)",
        yAxisID: "y",
        borderWidth: 2,
        fill: "origin",
        tension: 0,
      },
      {
        label: "PLTMG AMBON PEAKER",
        data: dataTrend?.["PLTMG WAAI"]?.datasets,
        borderColor: "rgb(156, 173, 206)",
        backgroundColor: "rgba(156, 173, 206, 0.9)",
        borderWidth: 2,
        yAxisID: "y",
        fill: "origin",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: true,
    plugins: {
      title: {
        display: true,
        text: "Trend Beban",
      },
    },
    scales: {
      y: {
        type: "linear" as const,
        display: true,
        position: "left" as const,
      },
      // y1: {
      //   type: 'linear' as const,
      //   display: true,
      //   position: 'right' as const,
      //   grid: {
      //     drawOnChartArea: false,
      //   },
      // },
    },
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <Line data={data} options={options} height={80} />
    </div>
  );
}
