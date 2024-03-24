"use client";
import React from "react";
import { AppPageProvider } from "@/components/pages/context";
import { usePathname } from 'next/navigation'
import * as NProgress from 'nprogress';

import ClientProvider from "./client-providers";

function PageProvider({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()

  React.useEffect(() => {
    NProgress.done();
  }, [pathname])

  return (
    <AppPageProvider>
    <ClientProvider>{children}</ClientProvider>
    </AppPageProvider>
  );
}

export default PageProvider;
