"use client";
import React from "react";
import TableInfo from "./components/table-info";
import TableDetail from "./components/table-detail";
import GrafikSistem from "./components/grafik-sistem";
import LineChart from "./components/line-chart";
import MapLine from "./components/map-line";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white relative">
        <MapLine />

        <div className="hidden lg:block lg:absolute lg:top-5 lg:right-5">
          <TableInfo />
        </div>

        <div className="hidden lg:block lg:absolute lg:top-[285px] lg:right-5">
          <GrafikSistem />
        </div>
      </div>

      {/* Gambar Sistem */}
      <div className="mx-auto lg:hidden">
        <TableInfo />
      </div>
      <div className="mx-auto lg:hidden">
        <GrafikSistem />
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
