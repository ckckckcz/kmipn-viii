"use client";

import { useState } from "react";
import { Bell, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return (
        <>
            <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
                <div className="bg-white border border-gray-200 rounded-br-xl rounded-bl-xl h-[60px] flex items-center justify-between px-3 shadow-lg">
                    {/* Left: Logo */}
                    <div className="flex items-center pl-8">
                        <div className="font-extrabold tracking-wider text-[17px] text-[#111111]">
                            Awas<span className="text-[#f15c12]">.</span>
                        </div>
                    </div>

                    {/* Real Logo Vector */}
                    <div className="pl-4 absolute left-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f15c12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#f15c12]">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" strokeLinecap="round" />
                        </svg>
                    </div>

                    {/* Center: Navigation (Desktop Only) */}
                    <nav className="hidden md:flex items-center gap-10 text-[14px] text-gray-500 font-medium z-10">
                        <Link href="#tujuan"><button className="cursor-pointer hover:text-[#111111] transition-colors">Tujuan</button></Link>
                        <Link href="#manfaat"><button className="cursor-pointer hover:text-[#111111] transition-colors">Manfaat</button></Link>
                        <Link href="#faq"><button className="cursor-pointer hover:text-[#111111] transition-colors">FAQ</button></Link>
                    </nav>

                    {/* Right: Actions (Desktop Only) */}
                    <div className="hidden md:flex items-center relative">
                        {!isAuthenticated ? (
                            <div className="flex items-center gap-2">
                                <div className="relative">
                                    <Link href="/login">
                                        <Button
                                            variant="outline"
                                            className="h-[40px] px-5 rounded-md cursor-pointer text-[14px] font-medium bg-[#f15c12] text-white hover:bg-blue-700 hover:text-white transition-all relative z-10 border-none"
                                        >
                                            Masuk
                                        </Button>
                                    </Link>
                                    <div className="hidden lg:flex absolute left-1/2 -translate-x-[65%] -bottom-[50px] pointer-events-none flex-row items-start z-40">
                                        <span className="text-[#f15c12] font-serif italic text-[16px] whitespace-nowrap font-medium -rotate-[3deg] mt-[20px] mr-1">
                                            Pantau Kepatuhan APD
                                        </span>
                                        <svg width="50" height="55" viewBox="0 0 100 100" fill="none" stroke="#f15c12" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="-translate-y-2">
                                            <path d="M 5,80 C 40,110 130,50 65,15" />
                                            <path d="M 90,12 L 65,15 L 75,40" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="bg-gray-50 border border-gray-100 rounded-full h-[46px] flex items-center px-[6px] gap-3 shadow-sm">
                                    <button
                                        className="pl-2 relative outline-none flex items-center justify-center p-1 rounded-full hover:bg-gray-200 transition-colors"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    >
                                        <Bell className="w-[18px] h-[18px] text-[#333]" strokeWidth={2.5} />
                                        <div className="absolute top-[3px] right-[4px] w-[6px] h-[6px] bg-[#f15c12] rounded-full border border-gray-50" />
                                    </button>
                                    <div
                                        className="w-[34px] h-[34px] rounded-full overflow-hidden cursor-pointer bg-gray-200 border-2 border-transparent hover:border-[#f15c12] transition-colors"
                                        onClick={() => setIsAuthenticated(false)}
                                        title="Logout Demo"
                                    >
                                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop" alt="avatar" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Dropdown (Desktop) */}
                                {isDropdownOpen && (
                                    <div className="absolute top-[60px] right-0 w-[350px] bg-white border border-gray-100 rounded-[24px] p-2 shadow-2xl z-50 transition-all">
                                        <div className="bg-white rounded-[18px] p-2">
                                            <div className="flex flex-col">
                                                {/* Notification 1 */}
                                                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-[14px]">
                                                    <div className="w-[26px] h-[26px] bg-[#f15c12] rounded-full flex items-center justify-center shrink-0">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="mt-[1px]">
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 text-[13px] font-semibold text-[#1a1a1a]">
                                                        Ethan liked your question
                                                    </div>
                                                    <div className="text-[12px] text-[#f15c12]/80 font-medium">3m</div>
                                                </div>

                                                {/* Notification 2 */}
                                                <div className="flex items-center gap-3 p-3 mt-1 hover:bg-gray-50 rounded-[14px] transition-colors cursor-pointer">
                                                    <div className="w-[26px] h-[26px] bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 text-[13px] font-medium text-[#444]">
                                                        Bob commented on your post
                                                    </div>
                                                    <div className="text-[12px] text-gray-400 font-medium">1h</div>
                                                </div>

                                                {/* Notification 3 */}
                                                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-[14px] transition-colors cursor-pointer">
                                                    <div className="w-[26px] h-[26px] bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 text-[13px] font-medium text-[#444]">
                                                        David commented on your post
                                                    </div>
                                                    <div className="text-[12px] text-gray-400 font-medium">3h</div>
                                                </div>

                                                {/* Notification 4 */}
                                                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-[14px] transition-colors cursor-pointer">
                                                    <div className="w-[26px] h-[26px] bg-[#f15c12] rounded-full flex items-center justify-center shrink-0">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white" className="mt-[1px]">
                                                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 text-[13px] font-medium text-[#444]">
                                                        Ethan liked your question
                                                    </div>
                                                    <div className="text-[12px] text-gray-400 font-medium">1w</div>
                                                </div>

                                                {/* Notification 5 */}
                                                <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-[14px] transition-colors cursor-pointer">
                                                    <div className="w-[26px] h-[26px] bg-gray-800 rounded-full flex items-center justify-center shrink-0">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                                        </svg>
                                                    </div>
                                                    <div className="flex-1 text-[13px] font-medium text-[#444]">
                                                        Ethan answered your question
                                                    </div>
                                                    <div className="text-[12px] text-gray-400 font-medium">3w</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center justify-center pt-2 pb-1.5 cursor-pointer hover:bg-gray-50 rounded-b-[18px] transition-colors group border-t border-gray-100">
                                            <span className="text-[10px] font-medium text-gray-500 group-hover:text-[#111111] mb-0 tracking-wider transition-colors">view all</span>
                                            <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-[#111111] transition-colors" strokeWidth={2.5} />
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    {/* Mobile Hamburger Button */}
                    <button
                        className="md:hidden flex items-center justify-center p-3 pr-4 z-10"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <div className="flex flex-col gap-[3.5px] items-center relative">
                            <div className="w-[18px] h-[1.5px] bg-[#111111] rounded-full"></div>
                            <div className="w-[18px] h-[1.5px] bg-[#111111] rounded-full"></div>
                            <div className="absolute top-[-3px] -right-[6px] w-[5px] h-[5px] bg-[#f15c12] rounded-full shadow-[0_0_4px_rgba(37,99,235,0.4)]"></div>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Fullscreen Menu */}
            <div
                className={`fixed inset-0 z-[100] bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col p-6 overflow-hidden transform ${isMobileMenuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-full opacity-0 pointer-events-none"}`}
            >
                {/* Top Header */}
                <div className="flex justify-between items-center mb-12 mt-4">
                    <span className="text-gray-500 text-[15px] font-medium">Menu</span>
                    <div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <span className="text-gray-500 text-[13px] font-medium group-hover:text-[#111111] transition-colors">Close</span>
                        <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-gray-400 group-hover:bg-gray-50 transition-all">
                            <X className="w-4 h-4 text-[#111111]" />
                        </div>
                    </div>
                </div>

                {/* Middle: Large Navigation Links */}
                <nav className="flex flex-col gap-6 text-[36px] font-medium text-[#111111] flex-1 overflow-y-auto mt-4">
                    <Link href="#tujuan" onClick={() => setIsMobileMenuOpen(false)}><button className="text-left hover:text-gray-600 transition-colors">Tujuan</button></Link>
                    <Link href="#manfaat" onClick={() => setIsMobileMenuOpen(false)}><button className="text-left hover:text-gray-600 transition-colors">Manfaat</button></Link>
                    <Link href="#faq" onClick={() => setIsMobileMenuOpen(false)}><button className="text-left hover:text-gray-600 transition-colors">FAQ</button></Link>
                    <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}><button className="text-left hover:text-gray-600 transition-colors text-[#f15c12]">Demo Dashboard</button></Link>
                </nav>

                {/* Bottom: Contact & Social Info */}
                <div className="mt-8 flex justify-between items-end pb-4 pt-6 border-t border-gray-100">
                    {/* Left: Contact Info */}
                    <div className="flex flex-col gap-2">
                        <a href="mailto:hello@kreativy.studio" className="text-gray-500 text-[14px] hover:text-[#111111] underline underline-offset-4 decoration-gray-300 hover:decoration-[#111111] transition-all">
                            hello@kreativy.studio
                        </a>
                        <a href="tel:+31222433112" className="text-gray-500 text-[14px] hover:text-[#111111] underline underline-offset-4 decoration-gray-300 hover:decoration-[#111111] transition-all">
                            +31 222 433 112
                        </a>
                    </div>

                    {/* Right: Social Links */}
                    <div className="flex flex-col gap-2 text-right">
                        <a href="#" className="text-gray-500 text-[14px] hover:text-[#111111] transition-colors">Behance</a>
                        <a href="#" className="text-gray-500 text-[14px] hover:text-[#111111] transition-colors">Dribbble</a>
                        <a href="#" className="text-gray-500 text-[14px] hover:text-[#111111] transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>
        </>
    );
}
