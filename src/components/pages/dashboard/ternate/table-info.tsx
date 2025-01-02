"use client";

import { useQuery } from "@tanstack/react-query";

import { roundNumber } from "@/utils/rounded";

import { getTotalTableTernate } from "@/api/table_total";
import { getTableDetail } from "@/api/table_detail";

export default function TableInfo() {
  const { data } = useQuery({
    queryKey: ["/table_total_ternate"],
    queryFn: () => getTotalTableTernate(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  const { data: dataDetail } = useQuery({
    queryKey: ["/table_detail"],
    queryFn: () => getTableDetail(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  const reserveMargin =
    (dataDetail?.grandTotal?.p_dmp_pasok - dataDetail?.grandTotal?.p) /
    dataDetail?.grandTotal?.p;

  return (
    <div className=" bg-cyan-900 text-white rounded pb-2 px-5 w-[380px]">
      <div className="text-center font-semibold text-xl p-4 text-white">
        SISTEM TERNATE
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className="grid grid-cols-9 py-2">
          <span className="col-span-6">SPINNING MARGIN</span>
          <span className=" text-amber-400 text-right col-span-2">-</span>
          <span className=" text-amber-400 text-right"></span>
        </div>
        <div className="grid grid-cols-9 py-2">
          <span className="col-span-6">FREKUENSI</span>
          <span className=" text-amber-400 text-right col-span-2">
            {roundNumber(data?.freq)}
          </span>
          <span className=" text-amber-400 text-right">Hz</span>
        </div>
        <div className="grid grid-cols-9 py-2">
          <span className="col-span-6">COSPHI</span>
          <span className=" text-amber-400 text-right col-span-2">
            {roundNumber(data?.cos_phi)}
          </span>
        </div>
        <div className="grid grid-cols-9 py-2">
          <span className="col-span-6">BEBAN SAAT INI</span>
          <span className=" text-amber-400 text-right col-span-2">
            {roundNumber(data?.daya)}
          </span>
          <span className=" text-amber-400 text-right">MW</span>
        </div>
        <div className="grid grid-cols-9 py-2">
          <span className="col-span-6">RESERVE MARGIN</span>
          <span className=" text-amber-400 text-right col-span-2">
            {/* {roundNumber(reserveMargin * 100)} */}-
          </span>
          <span className=" text-amber-400 text-right">%</span>
        </div>
        <div className="grid grid-cols-9 py-2 items-center">
          <span className="col-span-6">SUSUT TRANSMISI</span>
          <span className=" text-amber-400 text-right col-span-2">-</span>
          <span className=" text-amber-400 text-right">MW</span>
        </div>
      </div>
    </div>
  );
}
