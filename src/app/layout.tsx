import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aethyy | Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
