"use client";

import Navbar from "@/components/navbar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";

export default function NonDashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-full w-full">
      <Navbar />
      <main
        className={`h-full flex w-full flex-col`}
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
}
