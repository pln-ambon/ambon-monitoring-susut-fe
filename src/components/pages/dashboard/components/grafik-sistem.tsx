"use client";

import DoughnutChart from "@/components/ui/chart/doughnut-chart";
import { ChartData, ChartOptions } from "chart.js";

const data = {
  labels: ["Beban A", "Beban B"],
  datasets: [
    {
      //   label: "# of Votes",
      data: [12, 19],
      backgroundColor: ["#60a5fa", "#2EBDB5"],
      borderWidth: 1,
    },
  ],
};

const options: ChartOptions<"doughnut"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  // cutout: ,
  maintainAspectRatio: true,
  aspectRatio: 2,
};

const GrafikSistem = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg w-full shadow-md">
      <p className="font-semibold py-2 text-xl">Grafik Beban Sistem Ambon</p>
      <div className="flex gap-2">
        <div className="bg-[#60a5fa] text-white text-xs flex items-center rounded px-2">Beban A</div>
        <div className="bg-[#2EBDB5] text-white text-xs flex items-center rounded px-2">Beban B</div>
      </div>
      <DoughnutChart data={data} options={options} />
    </div>
    
  );
};

export default GrafikSistem;
