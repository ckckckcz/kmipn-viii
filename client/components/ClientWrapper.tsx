"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isAuthPage = pathname === "/login" || pathname === "/register";
    const isDashboardRoute = pathname === "/dashboard" || pathname?.startsWith("/admin/") || pathname?.startsWith("/admin") || pathname?.startsWith("/user");

    const hideLayout = isAuthPage || isDashboardRoute;

    return (
        <>
            {!hideLayout && <Navbar />}
            {children}
            {!hideLayout && <Footer />}
        </>
    );
}
