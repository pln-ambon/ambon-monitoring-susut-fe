// import Image from "next/image";
// import * as AspectRatio from '@radix-ui/react-aspect-ratio';

// import SistemSld from "@/components/icon/sistem.jpg"

// export default function GambarSistem() {
//   return (
//     <AspectRatio.Root ratio={16/5}>
//       <Image className="w-full" src={SistemSld} alt="SLD Image" />
//       {/* <div className="flex justify-center h-full items-center">
//         Gambar System(Menyusul)
//       </div> */}
//       </AspectRatio.Root>
//   );
// }

"use client"

import { MapContainer, LayersControl, Marker, TileLayer, Tooltip, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function MyMap(props: any) {
  // const { position, zoom } = props

  const position= [-7.234066, 112.730599]
  const zoom = 8

  return <MapContainer preferCanvas={false} center={position} zoom={zoom} style={{ height: "53vh", width: "100vw" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
}