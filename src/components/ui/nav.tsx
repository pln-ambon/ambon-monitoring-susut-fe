"use client";
import React from "react";
import Image from "next/image";
import Avatar, { ConfigProvider } from "react-avatar";
import { useRouter } from "next/navigation";
import { CircleAlert } from 'lucide-react';
import { LogOut } from 'lucide-react';

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Logo from "@/components/icon/pln.png"

export default function Nav() {
  const router = useRouter()
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleLogout = () => {
    router.push("/login")
  }
  return (
    <>
    <Dialog defaultOpen={openDialog} open={openDialog}>
        <DialogContent className="p-8 text-center w-1/5 bg-white">
        <CircleAlert className="h-24 w-24 mx-auto text-red-500" />
          <h5 className="font-semibold text-xl">Sign-out</h5>
          <p className="text-[#767882] px-5">
            Anda yakin ingin keluar?
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button
              variant="outline"
              type="button"
              onClick={handleCloseDialog}
              className="w-full"
            >
              Tidak
            </Button>
            <Button
              type="button"
              onClick={handleLogout}
              className="w-full"
            >
              Ya
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    <div className="flex items-center justify-between bg-white px-5 py-1 sticky top-0 z-10 shadow-sm">
      <div className="flex gap-4 font-semibold">
      <Image className="h-12 w-8" src={Logo} alt="PLN Logo" />
      <div className="hidden md:flex flex-col">
        <span>PT PLN(Persero)</span>
        <span>Untuk Induk Wilayah Maluku dan Maluku Utara</span>
      </div>
      </div>

      <div className="flex gap-4">

      {/* Menu Bar */}
      <div className="flex justify-center items-end py-2">
        <a href="#dashboard" className="px-4 cursor-pointer hover:border-b-2 border-blue-500 hover:text-blue-500 hover:scale-105 transition-transform font-semibold">Dashboard</a>
        <a href="#sistem" className="px-4 cursor-pointer hover:border-b-2 border-blue-500 hover:text-blue-500 hover:scale-105 transition-transform font-semibold">Monitoring Sistem</a>
        <a href="#susut" className="px-4 cursor-pointer hover:border-b-2 border-blue-500 hover:text-blue-500 hover:scale-105 transition-transform font-semibold">Monitoring Susut</a>
      </div>

      <Popover>
          <PopoverTrigger asChild>
      <Card className="divide-y rounded-md border shadow-white cursor-pointer">
        <CardContent className="flex items-center px-1 py-2">
        <ConfigProvider colors={["#60a5fa", "#60a5fa"]}>
            <Avatar
              className=""
              name={"Carolus Nurtyandi" || "N N"}
              size="40"
              round="30px"
              textSizeRatio={1.5}
              maxInitials={2}
            />
          </ConfigProvider>

          <p className="px-2 hidden md:flex">Carolus Nurtyandi</p>
        </CardContent>
      </Card>
      </PopoverTrigger>
      <PopoverContent className="flex gap-6 w-auto p-4 px-8 cursor-pointer bg-white" onClick={() => setOpenDialog(true)}>
           <LogOut/>
            Sign-out
          </PopoverContent>
        </Popover>
      </div>

    </div>
    </>
  );
}
