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
  aspectRatio: 1.5,
};

const GrafikSistem = () => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg w-full shadow-md h-full">
      <p className="font-semibold text-gray-500 text-lg mb-4">Grafik Beban Sistem Ambon</p>
      <DoughnutChart data={data} options={options} />
      <div className="flex gap-2 mt-4">
        <div className="bg-[#60a5fa] text-white text-xs flex items-center rounded px-2">Beban A</div>
        <div className="bg-[#2EBDB5] text-white text-xs flex items-center rounded px-2">Beban B</div>
      </div>
    </div>
    
  );
};

export default GrafikSistem;
