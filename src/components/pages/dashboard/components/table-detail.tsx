"use client";
import { Fragment } from "react";
import { useQuery } from "@tanstack/react-query";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { roundNumber } from "@/utils/rounded";
import { getTableDetail } from "@/api/table_detail";

export default function TableDetail() {
  const { data } = useQuery({
    queryKey: ["/table_detail"],
    queryFn: () => getTableDetail(),
    staleTime: 1000,
    refetchInterval: 60000, // 1 menit
    refetchIntervalInBackground: true,
  });

  console.log(data);

  return (
    <div className="flex flex-col w-full rounded overflow-auto overflow-x-auto shadow-md">
      <div className="grid grid-cols-6 text-center">
        <span className="py-2 col-span-2 bg-cyan-900 text-white">ENGINE</span>
        <span className="py-2 bg-cyan-900 text-white">
          DAYA MAMPU NETTO (MW)
        </span>
        <span className="py-2 bg-cyan-900 text-white">
          DAYA MAMPU PASOK (MW)
        </span>
        <span className="py-2 bg-cyan-900 text-white">BEBAN SISTEM (MW)</span>
        <span className="py-2 bg-cyan-900 text-white">TEGANGAN (KV)</span>
      </div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="grid grid-cols-6 font-bold">
            <span className="py-2 col-span-2 bg-blue-50 text-gray-700 text-left px-4">
              BMPP
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["BMPP WAAI"]?.total?.p_dmp_netto)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["BMPP WAAI"]?.total?.p_dmp_pasok)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["BMPP WAAI"]?.total?.p)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["BMPP WAAI"]?.total?.vAverage)}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 mt-1 text-center bg-gray-50">
              {data?.["BMPP WAAI"]?.detail?.map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <span className="py-2 col-span-2 text-left px-8 border-b">
                      {obj.unit_subname}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_netto)}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_pasok)}
                    </span>
                    <span className="py-2 border-b">{roundNumber(obj.p)}</span>
                    <span className="py-2 border-b">{roundNumber(obj.v)}</span>
                  </Fragment>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="grid grid-cols-6 font-bold">
            <span className="py-2 col-span-2 bg-blue-50 text-gray-700 text-left px-4">
              PLTMG AMBON PEAKER
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTMG WAAI"]?.total?.p_dmp_netto)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTMG WAAI"]?.total?.p_dmp_pasok)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTMG WAAI"]?.total?.p)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTMG WAAI"]?.total?.vAverage)}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 mt-1 text-center  bg-gray-50">
              {data?.["PLTMG WAAI"]?.detail?.map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <span className="py-2 col-span-2 text-left px-8 border-b">
                      {obj.unit_subname}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_netto)}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_pasok)}
                    </span>
                    <span className="py-2 border-b">{roundNumber(obj.p)}</span>
                    <span className="py-2 border-b">{roundNumber(obj.v)}</span>
                  </Fragment>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="grid grid-cols-6 font-bold">
            <span className="py-2 col-span-2 bg-blue-50 text-gray-700 text-left px-4">
              POKA
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD POKA"]?.total?.p_dmp_netto)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD POKA"]?.total?.p_dmp_pasok)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD POKA"]?.total?.p)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD POKA"]?.total?.vAverage)}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 mt-1 text-center  bg-gray-50">
              {data?.["PLTD POKA"]?.detail?.map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <span className="py-2 col-span-2 text-left px-8 border-b">
                      {obj.unit_subname}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_netto)}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_pasok)}
                    </span>
                    <span className="py-2 border-b">{roundNumber(obj.p)}</span>
                    <span className="py-2 border-b">{roundNumber(obj.v)}</span>
                  </Fragment>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="grid grid-cols-6 font-bold">
            <span className="py-2 col-span-2 bg-blue-50 text-gray-700 text-left px-4">
              PLTD HATIVE KECIL
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD HATIVE KECIL"]?.total?.p_dmp_netto)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD HATIVE KECIL"]?.total?.p_dmp_pasok)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD HATIVE KECIL"]?.total?.p)}
            </span>
            <span className="py-2 bg-blue-50 text-gray-700">
              {roundNumber(data?.["PLTD HATIVE KECIL"]?.total?.vAverage)}
            </span>
          </AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-6 mt-1 text-center  bg-gray-50">
              {data?.["PLTD HATIVE KECIL"]?.detail?.map((obj, idx) => {
                return (
                  <Fragment key={idx}>
                    <span className="py-2 col-span-2 text-left px-8 border-b">
                      {obj.unit_subname}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_netto)}
                    </span>
                    <span className="py-2 border-b">
                      {roundNumber(obj.p_dmp_pasok)}
                    </span>
                    <span className="py-2 border-b">{roundNumber(obj.p)}</span>
                    <span className="py-2 border-b">{roundNumber(obj.v)}</span>
                  </Fragment>
                );
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid grid-cols-6 text-center  ">
        <span className="py-2 col-span-2 bg-cyan-900 text-white">TOTAL</span>
        <span className="py-2 bg-cyan-900 text-white">
          {roundNumber(data?.grandTotal?.p_dmp_netto)}
        </span>
        <span className="py-2 bg-cyan-900 text-white">
          {roundNumber(data?.grandTotal?.p_dmp_pasok)}
        </span>
        <span className="py-2 bg-cyan-900 text-white">
          {roundNumber(data?.grandTotal?.p)}
        </span>
        <span className="py-2 bg-cyan-900 text-white">
          {roundNumber(data?.grandTotal?.vAverage)}
        </span>
      </div>
    </div>
  );
}
