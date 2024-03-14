"use client";
import Link from "next/link";
import Nav from "@/components/ui/nav";
import Dashboard from "@/components/pages/dashboard";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-screen p-8 bg-gray-200">
        <Dashboard />
      </main>
    </>
  );
}
