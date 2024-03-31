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
  SubTitle,
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
  SubTitle
);

export default function LineChart() {
  const { data: dataTrend } = useQuery({
    queryKey: ["/data_trend"],
    queryFn: () => getDataTrend(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  const labels = dataTrend?.["PLTMG WAAI"]?.labels
  const data = {
    labels: labels,
    datasets: [
      {
        label: "PLTD HATIVE",
        data: dataTrend?.["PLTD HATIVE KECIL"]?.datasets,
        borderColor: "rgb(209, 207, 226)",
        backgroundColor: "rgba(209, 207, 226, 0.7)",
        borderWidth: 2,
        yAxisID: "y",
        fill: true,
        tension: 0,
      },
      {
        label: "PLTD POKA",
        data: dataTrend?.["PLTD POKA"]?.datasets,
        borderColor: "rgb(212, 175, 185)",
        backgroundColor: "rgba(212, 175, 185, 0.7)",
        borderWidth: 2,
        yAxisID: "y",
        fill: "origin",
        tension: 0,
      },
      {
        label: "BMPP",
        data: dataTrend?.["BMPP WAAI"]?.datasets,
        borderColor: "rgb(126, 196, 207)",
        backgroundColor: "rgba(126, 196, 207, 0.7)",
        yAxisID: "y",
        borderWidth: 2,
        fill: "origin",
        tension: 0,
      },
      {
        label: "PLTMG AMBON PEAKER",
        data: dataTrend?.["PLTMG WAAI"]?.datasets,
        borderColor: "rgb(156, 173, 206)",
        backgroundColor: "rgba(156, 173, 206, 0.7)",
        borderWidth: 2,
        yAxisID: "y",
        fill: "origin",
        tension: 0,
      },
      {
        label: "TOTAL",
        data: dataTrend?.arrTotal,
        borderColor: "rgb(254, 197, 187)",
        backgroundColor: "rgba(254, 197, 187, 0.7)",
        borderWidth: 2,
        yAxisID: "y",
        fill: true,
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
        text: "Trend Beban 24 Jam Terakhir (KW)",
      },
      subtitle: {
        display: true,
        text: "Beban  (kw)",
        position: "left"
      },
    },
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 24,
        },
      },
    },
  };

  return (
    <div className="bg-gray-100 py-8 px-4 rounded-lg mb-8">
      <Line data={data} options={options} height={80} />
    </div>
  );
}
