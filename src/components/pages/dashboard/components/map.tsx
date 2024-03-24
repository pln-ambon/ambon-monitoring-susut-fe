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

"use client";

import {
  MapContainer,
  LayersControl,
  Marker,
  TileLayer,
  Tooltip,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

export default function MyMap(props: any) {
  // const { position, zoom } = props

  const position = [-3.6628412, 128.1604411];
  const position2 = [-3.6891949, 128.2225471];
  const position3 = [-3.6158404, 128.2623391];
  const position4 = [-3.6151473, 128.2625465];
  const position5 = [-3.5489655, 128.3357549];
  const zoom = 11;

  return (
    <MapContainer
      preferCanvas={false}
      center={position}
      zoom={zoom}
      style={{ height: "53vh", width: "100vw", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip>GI Wayame</Tooltip>
      </Marker>

      <Marker position={position2}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip>GI Sirimau</Tooltip>
      </Marker>

      <Marker position={position3}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip>GI Passo</Tooltip>
      </Marker>

      <Marker position={position4}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip>GIS Passo</Tooltip>
      </Marker>

      <Marker position={position5}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
        <Tooltip>GI Waai</Tooltip>
      </Marker>
    </MapContainer>
  );
}
