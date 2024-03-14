import Link from "next/link";

export default function TableInfo() {
  return (
    <div className="flex flex-col w-full font-bold rounded-lg overflow-hidden">
      <div className="bg-blue-400 text-center font-bold text-xl p-4 text-white">
        SISTEM AMBON
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0">
        <span className="font-semibold text-gray-500">Tegangang</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0">
        <span className="font-semibold text-gray-500">Arus</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0">
        <span className="font-semibold text-gray-500">Frekuensi</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0">
        <span className="font-semibold text-gray-500">CosPhi</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0">
        <span className="font-semibold text-gray-500">Daya</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0">
        <span className="font-semibold text-gray-500">DMP</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
      <div className="grid grid-cols-2 p-4 px-6 border border-b-0 rounded-b-lg">
        <span className="font-semibold text-gray-500">Susut Tranmisi</span>
        <span className="text-xl text-blue-400">150.1</span>
      </div>
    </div>
  );
}
