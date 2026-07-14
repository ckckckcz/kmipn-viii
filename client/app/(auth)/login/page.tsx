"use client";

import React from "react";
import { Shield, ChevronDown, Check, ArrowRight, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
    return (
        <div className="flex min-h-screen w-full bg-white font-sans">
            {/* Left Column (Form) */}
            <div className="w-full max-w-5xl flex shrink-0 flex-col pt-16 pb-10 px-8 sm:px-14 md:px-16 lg:px-12 border-r border-gray-100 relative z-10 bg-white shadow-[20px_0_40px_-20px_rgba(0,0,0,0.05)]">
                {/* Logo Top Left */}

                <div className="flex-1 flex flex-col justify-center max-w-[380px] w-full mx-auto mt-4">
                    <div className="flex items-center gap-2 mb-10 text-[#111111]">
                        <Shield className="w-8 h-8 text-[#f15c12]" strokeWidth={2.5} />
                        <span className="font-bold tracking-wide text-[22px] flex items-center">
                            Awas<span className="text-[#f15c12]">.</span>
                        </span>
                    </div>
                    <h1 className="text-[28px] font-bold text-gray-900 mb-2">Masuk Akun</h1>
                    <p className="text-[14px] text-gray-500 mb-8">
                        Belum punya akun Awas? <a href="#" className="font-semibold text-[#111111] hover:text-[#f15c12] underline underline-offset-2 transition-colors">Hubungi Admin K3</a>
                    </p>

                    <form className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-semibold text-gray-800">Email</label>
                            <input
                                type="email"
                                placeholder="Masukkan email Anda"
                                className="w-full h-[46px] px-4 rounded-[10px] border border-gray-200 bg-gray-50/50 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-[#f15c12] focus:ring-[3px] focus:ring-[#f15c12]/10"
                            />
                        </div>

                        <div className="flex flex-col gap-2 relative">
                            <label className="text-[14px] font-semibold text-gray-800">Kata Sandi</label>
                            <input
                                type="password"
                                placeholder="Masukkan kata sandi"
                                className="w-full h-[46px] px-4 rounded-[10px] border border-gray-200 bg-gray-50/50 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:border-[#f15c12] focus:ring-[3px] focus:ring-[#f15c12]/10"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-1">
                            <label className="relative flex items-center cursor-pointer group">
                                <input type="checkbox" className="peer sr-only" />
                                <div className="w-5 h-5 rounded-[6px] border-[1.5px] border-gray-300 peer-checked:bg-[#f15c12] peer-checked:border-[#f15c12] transition-all bg-white flex items-center justify-center group-hover:border-[#f15c12]">
                                    <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100" strokeWidth={3} />
                                </div>
                                <span className="ml-2.5 text-[14px] text-gray-600 select-none group-hover:text-gray-800 transition-colors">Ingat saya</span>
                            </label>
                            <a href="#" className="text-[13px] font-medium text-gray-600 hover:text-[#f15c12] transition-colors underline underline-offset-4 decoration-transparent hover:decoration-[#f15c12]">
                                Lupa sandi?
                            </a>
                        </div>

                        <Button className="w-full h-[48px] bg-[#f15c12] hover:bg-[#1d4ed8] text-white rounded-[10px] text-[15px] font-medium mt-3 transition-colors shadow-md shadow-[#f15c12]/20 hover:shadow-lg border-0 hover:shadow-[#f15c12]/30">
                            Masuk
                        </Button>
                    </form>

                    <div className="relative flex items-center py-5 my-2">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-400 text-[13px] font-medium tracking-wide">atau masuk dengan</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Button variant="outline" className="w-full h-[46px] rounded-[10px] flex items-center justify-center gap-3 bg-white border border-2 border-gray-200 transition-colors outline-none">
                            <svg viewBox="0 0 24 24" width="18" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                            <span className="text-[14px] font-medium text-gray-700">Lanjutkan dengan Google</span>
                        </Button>
                    </div>
                </div>

                <div className="mt-auto pt-16 mx-auto text-center md:text-left">
                    <p className="text-[12px] text-gray-400">
                        Copyright © 2026 Awas K3 Solution. Semua hak dilindungi.
                    </p>
                </div>
            </div>

            {/* Right Column (Image/Decoration) */}
            <div className="hidden lg:block relative  flex-1 bg-slate-950 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&fit=crop"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-transparent" />

                {/* Overlay Text */}
                <div className="relative z-10 w-full h-full flex flex-col pt-38 px-16 xl:px-24">
                    <h2 className="text-[44px] leading-[1.1] font-bold text-white max-w-[500px]">
                        Platform Pengawasan APD Berbasis AI
                    </h2>
                    <p className="mt-3 text-[18px] leading-[1.6] text-gray-300 max-w-[500px]">
                        Pantau dan kelola tingkat kepatuhan APD pekerja secara real-time, dapatkan laporan analitis objektif, dan integrasikan kontrol akses gerbang masuk.
                    </p>
                </div>
            </div>
        </div>
    );
}
