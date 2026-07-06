import { Layers, ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative w-full bg-white flex flex-col items-center font-sans overflow-hidden">
            {/* Wrapper Container */}
            <div className="relative w-[90%] max-w-7xl flex flex-col">
                {/* Infinite Vertical Grid Lines (extends past copyright) */}
                <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />
                <div className="absolute top-[-100vh] bottom-[-100vh] right-0 w-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />

                {/* --- Main Links Section (Artboard Box) --- */}
                <div className="relative w-full lg:py-16 py-10 px-4 md:px-8">
                    {/* Infinite Horizontal Grid Lines */}
                    <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />
                    <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />

                    {/* Corner Markers (only on this main box) */}
                    <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t-[1.5px] border-l-[1.5px] border-[#2563eb] opacity-100 pointer-events-none" />
                    <div className="absolute top-[-1px] right-[-1px] w-3 h-3 border-t-[1.5px] border-r-[1.5px] border-[#2563eb] opacity-100 pointer-events-none" />
                    <div className="absolute bottom-[-1px] left-[-1px] w-3 h-3 border-b-[1.5px] border-l-[1.5px] border-[#2563eb] opacity-100 pointer-events-none" />
                    <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b-[1.5px] border-r-[1.5px] border-[#2563eb] opacity-100 pointer-events-none" />

                    {/* Content Grid */}
                    <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {/* Column 1: Brand & Description */}
                        <div className="flex flex-col gap-5 lg:pr-8">
                            <div className="flex items-center gap-2 text-[#111111]">
                                <Layers className="w-5 h-5 text-[#2563eb]" strokeWidth={2.5} />
                                <span className="font-bold tracking-wide text-[15px]">MBG</span>
                            </div>
                            <p className="text-[14px] text-gray-500 leading-relaxed">
                                Program pemenuhan nutrisi terpadu untuk anak usia sekolah di seluruh Indonesia menuju Generasi Emas.
                            </p>
                        </div>

                        {/* Column 2: Product / Program */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-[#111111] text-[14px] font-medium">Program</h3>
                            <div className="flex flex-col gap-3.5 text-[14px] text-gray-500">
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Pelaksanaan</a>
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Peta Distribusi</a>
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Dokumentasi</a>
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Laporan</a>
                            </div>
                        </div>

                        {/* Column 3: Company / Informasi */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-[#111111] text-[14px] font-medium">Informasi</h3>
                            <div className="flex flex-col gap-3.5 text-[14px] text-gray-500">
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Tentang Kami</a>
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Berita</a>
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Karir</a>
                                <a href="#" className="hover:text-[#2563eb] transition-colors w-fit">Kontak</a>
                            </div>
                        </div>

                        {/* Column 4: Stay Updated */}
                        <div className="flex flex-col gap-5">
                            <h3 className="text-[#111111] text-[14px] font-medium">Berlangganan Info</h3>
                            <div className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Masukkan email"
                                    className="flex-1 bg-[#f9fafb] border border-gray-200 border-r-0 rounded-l-md px-3.5 py-2.5 text-[13px] text-gray-700 outline-none focus:border-[#2563eb] focus:ring-1 focus:ring-[#2563eb] focus:bg-white transition-all w-full min-w-0"
                                />
                                <button className="bg-[#111111] hover:bg-[#2563eb] text-white px-4 py-2.5 rounded-r-md transition-colors border border-l-0 border-[#111111] hover:border-[#2563eb] flex items-center justify-center shrink-0 h-full min-h-[41px] max-h-[41px]">
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Copyright Section --- */}
                <div className="relative w-full pt-8 pb-10 px-4 md:px-8">
                    {/* Faint internal horizontal line bounded by vertical axes */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200 pointer-events-none" />

                    <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-gray-500">
                        <span className="text-center md:text-left">
                            © 2026 Pemerintah Republik Indonesia. All rights reserved.
                        </span>
                        <div className="flex flex-wrap justify-center items-center gap-6">
                            <a href="#" className="hover:text-[#2563eb] transition-colors">Privasi</a>
                            <a href="#" className="hover:text-[#2563eb] transition-colors">Syarat & Ketentuan</a>
                            <a href="#" className="hover:text-[#2563eb] transition-colors">Twitter</a>
                            <a href="#" className="hover:text-[#2563eb] transition-colors">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
