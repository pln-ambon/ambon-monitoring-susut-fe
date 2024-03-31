"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { roundNumber } from "@/utils/rounded";

import { getTotalTable } from "@/api/table_total";

export default function TableInfo() {
  const { data } = useQuery({
    queryKey: ["/table_total"],
    queryFn: () => getTotalTable(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  return (
    <div className=" bg-cyan-900 text-white rounded pb-2 px-5 w-[380px]">
      <div className="text-center font-semibold text-xl p-4 text-white">
        SISTEM AMBON
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-2 py-2">
          <span className="">TEGANGAN</span>
          <span className=" text-amber-400 text-right">
            {roundNumber(data?.voltage)} KV
          </span>
        </div>
        <div className="grid grid-cols-2 py-2">
          <span className="">ARUS</span>
          <span className=" text-amber-400 text-right">
            {roundNumber(data?.curent)} A
          </span>
        </div>
        <div className="grid grid-cols-2 py-2">
          <span className="">FREKUENSI</span>
          <span className=" text-amber-400 text-right">
            {roundNumber(data?.freq)} Hz
          </span>
        </div>
        <div className="grid grid-cols-2 py-2">
          <span className="">COSPHI</span>
          <span className=" text-amber-400 text-right">
            {roundNumber(data?.cos_phi)}
          </span>
        </div>
        <div className="grid grid-cols-2 py-2">
          <span className="">DAYA</span>
          <span className=" text-amber-400 text-right">
            {roundNumber(data?.daya)} MW
          </span>
        </div>
        <div className="grid grid-cols-2 py-2">
          <span className="">DMP</span>
          <span className=" text-amber-400 text-right">
            {roundNumber(data?.dmp)} MW
          </span>
        </div>
        <div className="grid grid-cols-2 py-2 items-center">
          <span className="">SUSUT TRANSMISI</span>
          <span className=" text-amber-400 text-right">- MW</span>
        </div>
      </div>
    </div>
  );
}
