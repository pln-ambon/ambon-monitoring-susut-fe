"use client"
import React from "react";
import TableInfo from "./components/table-info";
import TableDetail from "./components/table-detail"
import GrafikSistem from "./components/grafik-sistem"
import GambarSistem from "./components/gambar-sistem"
import dynamic from 'next/dynamic';
// const Map = dynamic(() => import("@/components/pages/dashboard/components/gambar-sistem"), { ssr: false });
import LineChart from "./components/line-chart"


export default function Dashboard() {
  const Map = React.useMemo(() => dynamic(
    () => import('@/components/pages/dashboard/components/map'),
    { 
      loading: () => <p className="text-center mt-5">A map is loading</p>,
      ssr: false
    }
  ), [])
  return (
    <div className="flex flex-col gap-4">
      {/* Cuaca */}
      {/* <div className="grid grid-cols-2 md:flex md:justify-start gap-6 font-semibold" id="dashboard">
        <div className="p-2 px-6 bg-gray-50 rounded-lg shadow-md">
          <span className="text-gray-400 text-sm">Cuaca:</span>
          <span className="text-lg text-blue-500 px-6 mt-2 font-bold">Hujan</span>
        </div>
        <div className="p-2 px-6 bg-gray-50 rounded-lg shadow-md">
          <span className="text-gray-400 text-sm">Suhu:</span>
          <span className="text-lg text-blue-500 px-6 mt-2 font-bold">20&deg;Celcius </span>
        </div>
      </div> */}

      {/* Gambar Sistem */}
      <div className="grid lg:grid-cols-12 gap-4" id="#sistem">
        <div className="col-span-12 lg:col-span-5 bg-gray-50 rounded-lg overflow-hidden shadow-md">
          {/* <Map /> */}
          <GambarSistem />
        </div>
        <div className="col-span-12 lg:col-span-3">
          <TableInfo />
        </div>
        <div className="col-span-8 lg:col-span-4">
          <GrafikSistem />
        </div>
      </div>

      {/* Gambar Table */}
      <div className="grid lg:grid-cols-12 gap-4" id="susut">
        <div className="col-span-12 rounded-lg overflow-hidden">
          <TableDetail />
        </div>
      </div>

      <LineChart />
    </div>
  );
}
