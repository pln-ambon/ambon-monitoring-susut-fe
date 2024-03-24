import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
        fill: true,
        tension: 0.1,
      },
      {
        label: "BMPP",
        data: [65, 75, 62, 65, 69, 59, 62],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
        fill: true,
        tension: 0.1,
      },
      {
        label: "PLTD POKA",
        data: [75, 55, 86, 98, 88, 55, 66],
        borderColor: "rgb(53, 162, 100)",
        backgroundColor: "rgba(53, 162, 100, 0.5)",
        yAxisID: "y",
        fill: true,
        tension: 0.1,
      },
      {
        label: "PLTD HATIVE",
        data: [98, 75, 86, 85, 75, 85, 65],
        borderColor: "rgb(53, 200, 262)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y",
        fill: true,
        tension: 0.1,
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
    <div className="bg-gray-50 p-8 rounded-lg">
      <Line data={data} options={options} height={80} />
    </div>
  );
}
