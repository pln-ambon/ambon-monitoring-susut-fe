"use client";
import React from "react";
// import { AppPageProvider } from "@/components/pages/context";

import ClientProvider from "./client-providers";

function PageProvider({ children }: { children: React.ReactNode }) {
  return (
    // <AppPageProvider>
    <ClientProvider>{children}</ClientProvider>
    // </AppPageProvider>
  );
}

export default PageProvider;
