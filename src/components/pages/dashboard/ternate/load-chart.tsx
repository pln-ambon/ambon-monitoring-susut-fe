"use client";

import DoughnutChart from "@/components/ui/chart/doughnut-chart";
import { useQuery } from "@tanstack/react-query";

import { getDataGrafikBebanTernate } from "@/api/grafik_beban";

const LoadChart = () => {
  const { data: dataGrafik } = useQuery({
    queryKey: ["/grafik_beban_ternate"],
    queryFn: () => getDataGrafikBebanTernate(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  const data = {
    labels: dataGrafik?.unitNames || [],
    datasets: [
      {
        data: dataGrafik?.unitValue || [],
        backgroundColor: dataGrafik?.colors,
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "bottom",
        align: "center",
        labels: {
          color: "#FFFFFF",
        },
      },
      datalabels: {
        formatter: (value: any, context: any) => {
          const dataIndex = context.dataIndex;
          return context.chart.data.labels[dataIndex];
        },
      },
    },
    // cutout: ,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
  };

  return (
    <div className="bg-cyan-900 p-6 rounded w-[380px] shadow-md h-auto">
      <p className="text-white font-semibold text-center text-lg mb-4">
        GRAFIK BEBAN SISTEM
      </p>
      <DoughnutChart data={data} options={options} />
      <div className="grid grid-cols-2 gap-2 mt-8">
        <div className=" bg-[#d1cfe2] text-sm flex items-center rounded px-2 py-1">
          PLTD KASTELA
        </div>
        <div className="bg-[#d4afb9] text-sm flex items-center rounded px-2 py-1">
          PLTMG KASTELA
        </div>
        <div className="bg-[#9cadce] text-sm flex items-center rounded px-2 py-1">
          PLTD KAYU MERAH
        </div>
        <div className="bg-[#7ec4cf] text-sm flex items-center rounded px-2 py-1">
          PLTU TIDORE
        </div>
      </div>
    </div>
  );
};

export default LoadChart;
