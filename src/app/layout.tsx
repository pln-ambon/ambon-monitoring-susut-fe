import React from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

// global css
import "./globals.css";
import PageProvider from "./page-provider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PLN UP3B - Monitoring Kelistrikan",
  description: "Monitoring sistem kelistrikan di PLN Wilayah Maluku dan Maluku Utara",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="text-gray-600">
      <body className={nunito.className}>
        <PageProvider>
          <NextTopLoader showSpinner={false} />
          <main>{children}</main>
        </PageProvider>
      </body>
    </html>
  );
}
