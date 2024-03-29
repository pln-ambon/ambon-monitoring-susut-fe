import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import AmbonGif from "@/components/icon/ambon.gif";

import { roundNumber } from "@/utils/rounded";

import { getDataMap } from "@/api/data_map";

export default function GambarSistem() {
  const { data } = useQuery({
    queryKey: ["/data_map"],
    queryFn: () => getDataMap(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  return (
    <div className="relative text-xs">
      <Image className="w-full rounded-lg" src={AmbonGif} alt="SLD Image" />

      {/* ambon peaker */}
      <div className="absolute flex flex-col text-center top-28 right-28 font-extrabold text-yellow-300">
        <span>PLTMG</span>
        <span>AMBON PEAKER</span>
        <span>{roundNumber(data?.["PLTMG WAAI"]?.pTotal)} MW</span>
        <span>{roundNumber(data?.["PLTMG WAAI"]?.vAverage)} KV</span>
      </div>

      {/* BMPP */}
      <div className="absolute flex flex-col text-center top-48 right-10 font-extrabold text-yellow-300">
        <span>BMPP</span>
        <span>{roundNumber(data?.["BMPP WAAI"]?.pTotal)} MW</span>
        <span>{roundNumber(data?.["BMPP WAAI"]?.vAverage)} KV</span>
      </div>

      {/* GI PASSO */}
      <div className="absolute flex flex-col text-center top-52 right-48 font-extrabold text-red-500">
        <span>GI PASSO</span>
      </div>

      {/* GI PASSO */}
      <div className="absolute flex flex-col text-center top-56 right-[26em] font-extrabold text-yellow-300">
        <span>PLTD POKA</span>
        <span>{roundNumber(data?.["PLTD POKA"]?.pTotal)} MW</span>
        <span>{roundNumber(data?.["PLTD POKA"]?.vAverage)} KV</span>
      </div>

      {/*PLTD HATIVE */}
      <div className="absolute flex flex-col text-center top-[20rem] right-[24em] font-extrabold text-yellow-300">
        <span>PLTD HATIVE</span>
        <span>{roundNumber(data?.["PLTD HATIVE KECIL"]?.pTotal)} MW</span>
        <span>{roundNumber(data?.["PLTD HATIVE KECIL"]?.vAverage)} KV</span>
      </div>

      {/* GI H BESAR */}
      <div className="absolute flex flex-col text-center top-[20rem] right-[38em] font-extrabold text-red-500">
        <span>GI HATIVE BESAR</span>
      </div>

      {/* GI SIRIMAU */}
      <div className="absolute flex flex-col text-center top-[25rem] right-[24em] font-extrabold text-red-500">
        <span>GI SIRIMAU</span>
      </div>
    </div>
  );
}
