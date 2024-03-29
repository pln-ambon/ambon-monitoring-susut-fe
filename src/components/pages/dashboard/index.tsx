"use client";
import React from "react";
import TableInfo from "./components/table-info";
import TableDetail from "./components/table-detail";
import GrafikSistem from "./components/grafik-sistem";
import GambarSistem from "./components/gambar-sistem";
import dynamic from "next/dynamic";
// const Map = dynamic(() => import("@/components/pages/dashboard/components/gambar-sistem"), { ssr: false });
import LineChart from "./components/line-chart";
import MapLine from "./components/map-line";

export default function Dashboard() {
  const Map = React.useMemo(
    () =>
      dynamic(() => import("@/components/pages/dashboard/components/map"), {
        loading: () => <p className="text-center mt-5">A map is loading</p>,
        ssr: false,
      }),
    [],
  );
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white relative">
        <MapLine />

        <TableInfo />

        <GrafikSistem />
      </div>

      {/* Gambar Sistem */}
      <div className="grid lg:grid-cols-12 gap-4" id="#sistem">
        <div className="col-span-12 lg:col-span-3">{/* <TableInfo /> */}</div>
        <div className="col-span-8 lg:col-span-4">{/* <GrafikSistem /> */}</div>
      </div>

      {/* Gambar Table */}
      <div className="rounded overflow-hidden px-8 mt-8" id="susut">
        <TableDetail />
      </div>
      <div className="rounded overflow-hidden px-8 mt-8" id="susut">
        <LineChart />
      </div>
    </div>
  );
}
