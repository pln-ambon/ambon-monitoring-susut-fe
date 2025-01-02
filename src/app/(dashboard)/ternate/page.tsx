import TableInfo from "@/components/pages/dashboard/ternate/table-info";
import LoadChart from "@/components/pages/dashboard/ternate/load-chart";
import TableDetail from "@/components/pages/dashboard/ambon/table-detail";
import LineChart from "@/components/pages/dashboard/ambon/line-chart";
import MapLine from "@/components/pages/dashboard/ternate/map-line";

export default function TernatePage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="bg-white relative">
          <MapLine />

          <div className="hidden lg:block lg:absolute lg:top-5 lg:right-5">
            <TableInfo />
          </div>

          <div className="hidden lg:block lg:absolute lg:top-[285px] lg:right-5">
            <LoadChart />
          </div>
        </div>

        {/* Gambar Sistem */}
        <div className="mx-auto lg:hidden">
          <TableInfo />
        </div>
        <div className="mx-auto lg:hidden">
          <LoadChart />
        </div>
      </div>
    </>
  );
}
