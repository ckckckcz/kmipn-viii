import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "@/styles/globals.css";
import ClientWrapper from "@/components/layout/ClientWrapper";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Awas - Sistem Pengawasan K3 Cerdas",
  description: "Sistem Pengawasan Kepatuhan APD Berbasis AI & Computer Vision",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", figtree.variable)}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
