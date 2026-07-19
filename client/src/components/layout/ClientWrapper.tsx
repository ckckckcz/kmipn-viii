"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/features/landing/components/Navbar";
import Footer from "@/features/landing/components/Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname === "/login" || pathname === "/register";
    const isDashboardRoute =
        pathname === "/dashboard" ||
        pathname?.startsWith("/dashboard/") ||
        pathname === "/gate-monitor" ||
        pathname?.startsWith("/gate-monitor/") ||
        pathname === "/violations" ||
        pathname?.startsWith("/violations/") ||
        pathname === "/zones" ||
        pathname?.startsWith("/zones/") ||
        pathname === "/workers" ||
        pathname?.startsWith("/workers/") ||
        pathname === "/cctv" ||
        pathname?.startsWith("/cctv/") ||
        pathname === "/ai-safety-officer" ||
        pathname?.startsWith("/ai-safety-officer/") ||
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/user");

    const hideLayout = isAuthPage || isDashboardRoute;

    return (
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}
