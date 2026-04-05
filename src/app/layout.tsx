"use client";

import { Sarabun } from "next/font/google";
import "./globals.css";
import TransitionOverlay from "@/components/transition/Transition";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${sarabun.className} bg-black antialiased flex justify-center`}
      >
        <div className="w-full max-w-120 min-h-screen bg-white relative overflow-hidden">
          {children}
          <TransitionOverlay />
        </div>
      </body>
    </html>
  );
}
