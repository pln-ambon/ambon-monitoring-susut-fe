import MapLine from "@/components/pages/dashboard/ambon/map-line";
import TableInfo from "@/components/pages/dashboard/ambon/table-info";
import LoadChart from "@/components/pages/dashboard/ambon/load-chart";
import TableDetail from "@/components/pages/dashboard/ambon/table-detail";
import LineChart from "@/components/pages/dashboard/ambon/line-chart";

export default function AmbonPage() {
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

        {/* Gambar Table */}
        <div className="rounded overflow-hidden px-8 mt-8" id="susut">
          <TableDetail />
        </div>
        <div className="rounded overflow-hidden px-8 mt-8" id="susut">
          <LineChart />
        </div>
      </div>
    </>
  );
}
