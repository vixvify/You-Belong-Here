"use client";

import { Kanit } from "next/font/google";
import "./globals.css";
import TransitionOverlay from "@/components/transition/Transition";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["400", "600"],
  variable: "--font-kanit",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${kanit.className} bg-black antialiased flex justify-center`}
      >
        <div className="w-full max-w-120 min-h-screen bg-white relative overflow-hidden">
          {children}
          <TransitionOverlay />
        </div>
      </body>
    </html>
  );
}
