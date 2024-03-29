import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "PLTMG AMBON PEAKER",
        data: [52, 54, 68, 89, 88, 52, 55],
        borderColor: "rgb(156, 173, 206)",
        backgroundColor: "rgba(156, 173, 206, 0.5)",
        borderWidth: 2,
        yAxisID: "y",
        fill: "origin",
        tension: 0,
      },
      {
        label: "BMPP",
        data: [65, 75, 62, 65, 69, 59, 62],
        borderColor: "rgb(126, 196, 207)",
        backgroundColor: "rgba(126, 196, 207, 0.5)",
        yAxisID: "y",
        borderWidth: 2,
        fill: "origin",
        tension: 0,
      },
      {
        label: "PLTD POKA",
        data: [75, 55, 86, 98, 88, 55, 66],
        borderColor: "rgb(212, 175, 185)",
        backgroundColor: "rgba(212, 175, 185, 0.5)",
        borderWidth: 2,
        yAxisID: "y",
        fill: "origin",
        tension: 0,
      },
      {
        label: "PLTD HATIVE",
        data: [98, 75, 86, 85, 75, 85, 65],
        borderColor: "rgb(209, 207, 226)",
        backgroundColor: "rgba(209, 207, 226, 0.5)",
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
