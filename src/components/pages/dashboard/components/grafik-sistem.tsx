"use client";

import DoughnutChart from "@/components/ui/chart/doughnut-chart";
import { ChartData, ChartOptions } from "chart.js";
import { useQuery } from "@tanstack/react-query";

import { roundNumber } from "@/utils/rounded";

import { getDataGrafikBeban } from "@/api/grafik_beban";

const GrafikSistem = () => {
  
  const { data: dataGrafik } = useQuery({
    queryKey: ["/grafik_beban"],
    queryFn: () => getDataGrafikBeban(),
    staleTime: 1000,
  });

const data = {
  labels: dataGrafik?.unitNames || [],
  datasets: [
    {
      //   label: "# of Votes",
      data: dataGrafik?.unitValue || [],
      backgroundColor: ["#60a5fa", "#2EBDB5", "#84cc16", "#ec4899"],
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


  return (
    <div className="bg-gray-50 p-4 rounded-lg w-full shadow-md h-full">
      <p className="font-semibold text-gray-500 text-lg mb-4">
        Grafik Beban Sistem Ambon
      </p>
      <DoughnutChart data={data} options={options} />
      <div className="flex gap-2 mt-8">
        <div className="bg-[#60a5fa] text-white text-xs flex items-center rounded px-2">
          PLTD POKA
        </div>
        <div className="bg-[#2EBDB5] text-white text-xs flex items-center rounded px-2">
          PLTD HATIVE KECIL
        </div>
        <div className="bg-[#84cc16] text-white text-xs flex items-center rounded px-2">
          PLTMG WAII
        </div>
        <div className="bg-[#ec4899] text-white text-xs flex items-center rounded px-2">
          BMPP WAII
        </div>
      </div>
    </div>
  );
};

export default GrafikSistem;
