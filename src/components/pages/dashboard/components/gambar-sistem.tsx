import Image from "next/image";
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

import SistemSld from "@/components/icon/sistem.jpg"

export default function GambarSistem() {
  return (
    <AspectRatio.Root ratio={16/5}>
      <Image className="w-full" src={SistemSld} alt="SLD Image" />
      {/* <div className="flex justify-center h-full items-center">
        Gambar System(Menyusul)
      </div> */}
      </AspectRatio.Root>
  );
}
