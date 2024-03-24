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
    refetchIntervalInBackground: true
  });

  return (
    <div className="flex flex-col w-full font-bold rounded-lg overflow-hidden bg-gray-50 h-full">
      <div className="bg-blue-400 text-center font-bold text-xl p-4 text-white">
        SISTEM AMBON
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-2 px-6 border border-b-0 h-full items-center">
          <span className="font-semibold text-gray-500">Tegangang</span>
          <span className="text-xl text-blue-400">
            {roundNumber(data?.voltage)} KV
          </span>
        </div>
        <div className="grid grid-cols-2 px-6 border border-b-0 h-full items-center">
          <span className="font-semibold text-gray-500">Arus</span>
          <span className="text-xl text-blue-400">
            {roundNumber(data?.curent)} A
          </span>
        </div>
        <div className="grid grid-cols-2 px-6 border border-b-0 h-full items-center">
          <span className="font-semibold text-gray-500">Frekuensi</span>
          <span className="text-xl text-blue-400">
            {roundNumber(data?.freq)} Hz
          </span>
        </div>
        <div className="grid grid-cols-2 px-6 border border-b-0 h-full items-center">
          <span className="font-semibold text-gray-500">CosPhi</span>
          <span className="text-xl text-blue-400">
            {roundNumber(data?.cos_phi)}
          </span>
        </div>
        <div className="grid grid-cols-2 px-6 border border-b-0 h-full items-center">
          <span className="font-semibold text-gray-500">Daya</span>
          <span className="text-xl text-blue-400">
            {roundNumber(data?.daya)} MW
          </span>
        </div>
        <div className="grid grid-cols-2 px-6 border border-b-0 h-full items-center">
          <span className="font-semibold text-gray-500">DMP</span>
          <span className="text-xl text-blue-400">
            {roundNumber(data?.dmp)} MW
          </span>
        </div>
        <div className="grid grid-cols-2 px-6 border border-b-0 rounded-b-lg h-full items-center">
          <span className="font-semibold text-gray-500">Susut Tranmisi</span>
          <span className="text-xl text-blue-400">- MW</span>
        </div>
      </div>
    </div>
  );
}
