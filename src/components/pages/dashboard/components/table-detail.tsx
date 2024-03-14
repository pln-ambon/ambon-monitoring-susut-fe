import { Fragment }from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function TableDetail() {
  return (
    <div className="flex flex-col w-full rounded-md overflow-auto overflow-x-auto shadow-md">
      <div className="grid grid-cols-6 text-center">
        <span className="py-1 col-span-2 bg-blue-400 text-white">ENGINE</span>
        <span className="py-1 bg-blue-400 text-white">DAYA MAMPU NETTO (MW)</span>
        <span className="py-1 bg-blue-400 text-white">DAYA MAMPU PASOK (MW)</span>
        <span className="py-1 bg-blue-400 text-white">BEBAN SISTEM (MW)</span>
        <span className="py-1 bg-blue-400 text-white">TEGANGAN (KV)</span>
      </div>
      <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="grid grid-cols-6 font-bold">
        <span className="py-1 col-span-2 bg-blue-50 text-gray-700 text-left px-4">BMPP</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">9.79</span>
        <span className="py-1 bg-blue-50 text-gray-700">0</span>
        </AccordionTrigger>
        <AccordionContent>
        <div className="grid grid-cols-6 mt-1 text-center bg-gray-50">
            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="grid grid-cols-6 font-bold">
        <span className="py-1 col-span-2 bg-blue-50 text-gray-700 text-left px-4">PLTMG AMBON PEAKER</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">9.79</span>
        <span className="py-1 bg-blue-50 text-gray-700">0</span>
        </AccordionTrigger>
        <AccordionContent>
        <div className="grid grid-cols-6 mt-1 text-center  bg-gray-50">
            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="grid grid-cols-6 font-bold">
        <span className="py-1 col-span-2 bg-blue-50 text-gray-700 text-left px-4">POKA</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">9.79</span>
        <span className="py-1 bg-blue-50 text-gray-700">0</span>
        </AccordionTrigger>
        <AccordionContent>
        <div className="grid grid-cols-6 mt-1 text-center  bg-gray-50">
            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>

    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="grid grid-cols-6 font-bold">
        <span className="py-1 col-span-2 bg-blue-50 text-gray-700 text-left px-4">PLTD HATIVE KECIL</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">58.56</span>
        <span className="py-1 bg-blue-50 text-gray-700">9.79</span>
        <span className="py-1 bg-blue-50 text-gray-700">0</span>
        </AccordionTrigger>
        <AccordionContent>
        <div className="grid grid-cols-6 mt-1 text-center  bg-gray-50">
            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>

            <span className="py-1 col-span-2 text-left px-8 border-b">BMPP</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">58.56</span>
            <span className="py-1 border-b">9.79</span>
            <span className="py-1 border-b">0</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      
      <div className="grid grid-cols-6 text-center  ">
        <span className="py-1 col-span-2 bg-blue-400 text-white">TOTAL</span>
        <span className="py-1 bg-blue-400 text-white">38.00</span>
        <span className="py-1 bg-blue-400 text-white">38.00</span>
        <span className="py-1 bg-blue-400 text-white">9.79</span>
        <span className="py-1 bg-blue-400 text-white">-</span>
      </div>
    </div>
  );
}
