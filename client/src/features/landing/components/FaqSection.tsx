"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
    const categories = [
        "Umum",
        "Sistem Deteksi AI",
        "Kontrol Akses (Gate)",
        "Dashboard & Analitik",
        "Implementasi & Integrasi"
    ];

    const [activeCategory, setActiveCategory] = useState("Umum");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = {
        "Umum": [
            {
                q: "Apa itu sistem Awas?",
                a: "Awas adalah Sistem Pengawasan Kepatuhan Penggunaan APD berbasis Artificial Intelligence Computer Vision yang dirancang untuk memverifikasi kelengkapan APD pekerja secara otomatis dan real-time di area industri berisiko tinggi."
            },
            {
                q: "Mengapa sistem pengawasan otomatis seperti Awas ini diperlukan?",
                a: "Sistem ini meminimalkan ketergantungan pada pengawasan manual yang sering kali tidak konsisten, objektif secara K3, dan rentan terhadap kelalaian manusia, sehingga menekan angka kecelakaan kerja secara signifikan."
            },
            {
                q: "Apakah sistem Awas berjalan secara real-time?",
                a: "Ya, sistem memproses aliran video dari kamera pengawas secara langsung (live stream) dan mendeteksi kelengkapan APD dalam hitungan milidetik."
            }
        ],
        "Sistem Deteksi AI": [
            {
                q: "APD jenis apa saja yang dapat dideteksi oleh AI Awas?",
                a: "AI kami dapat mendeteksi kelengkapan APD standar seperti helm keselamatan (safety helmet), rompi visibilitas tinggi (safety vest), sepatu boot safety, kacamata pelindung, hingga sabuk pengaman (safety harness)."
            },
            {
                q: "Bagaimana jika pekerja berada di area dengan pencahayaan minim?",
                a: "Sistem AI Awas dilengkapi model pemrosesan citra adaptif dan mendukung kamera inframerah (IR) atau thermal untuk memastikan akurasi deteksi tetap tinggi pada malam hari atau kondisi minim cahaya."
            },
            {
                q: "Apakah AI dapat membedakan tamu dengan pekerja biasa?",
                a: "Tentu. Sistem dapat diintegrasikan dengan database profil pekerja (menggunakan deteksi wajah atau kartu RFID) sehingga standar kelengkapan APD dapat disesuaikan berdasarkan peran masing-masing orang."
            }
        ],
        "Kontrol Akses (Gate)": [
            {
                q: "Bagaimana cara kerja mekanisme kontrol akses (gate control)?",
                a: "Kamera deteksi AI dipasang di gerbang masuk. Ketika pekerja mendekat, sistem akan memindai kelengkapan APD mereka. Gerbang fisik (turnstile/barrier gate) hanya akan terbuka otomatis jika seluruh APD yang diwajibkan terdeteksi lengkap."
            },
            {
                q: "Apa yang terjadi jika pekerja terdeteksi tidak mengenakan APD lengkap?",
                a: "Gerbang masuk akan tetap terkunci, dan layar display di gerbang akan menampilkan APD apa saja yang kurang (misal: rompi belum dipakai). Sistem juga akan mengirimkan peringatan suara atau notifikasi ke petugas K3."
            },
            {
                q: "Apakah pemantauan juga dilakukan di dalam area produksi?",
                a: "Ya. Selain kontrol akses masuk, Awas juga mendukung pemantauan pasif menggunakan jaringan CCTV yang sudah ada untuk mendeteksi pekerja yang melepas APD saat berada di dalam area kerja luas."
            }
        ],
        "Dashboard & Analitik": [
            {
                q: "Metrik apa saja yang disajikan di dalam dashboard kepatuhan?",
                a: "Dashboard menyajikan data real-time jumlah pekerja aktif, tingkat persentase kepatuhan penggunaan APD, log waktu pelanggaran lengkap dengan rekaman foto/video kejadian, tren kepatuhan mingguan/bulanan, serta laporan kepatuhan per divisi."
            },
            {
                q: "Apakah data kepatuhan ini bisa digunakan sebagai dokumen audit SMK3?",
                a: "Sangat bisa. Seluruh data pelanggaran dan kepatuhan terdokumentasi secara digital dengan cap waktu (timestamp) yang sah, sehingga mempermudah proses audit Sistem Manajemen K3 (SMK3) secara objektif."
            }
        ],
        "Implementasi & Integrasi": [
            {
                q: "Apakah Awas membutuhkan perangkat keras baru yang mahal?",
                a: "Tidak harus. Awas dirancang dengan arsitektur fleksibel yang dapat diintegrasikan dengan jaringan kamera CCTV IP (standard ONVIF) dan gate control elektrik yang sudah dimiliki perusahaan."
            },
            {
                q: "Bagaimana dengan kebijakan privasi dan keamanan data pekerja?",
                a: "Semua pemrosesan video dilakukan secara lokal (on-premise edge computing) untuk menjamin privasi pekerja. Data wajah dan log kepatuhan disimpan dalam enkripsi ketat sesuai standar regulasi keamanan data industri."
            }
        ]
    };

    const currentFaqs = questions[activeCategory as keyof typeof questions] || [];

    return (
        <section id="faq" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:py-24 py-10 mb-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 w-full px-4 md:px-8">

                {/* Left Column */}
                <div className="w-full lg:w-[35%] flex flex-col shrink-0">
                    <h2 className="text-[28px] md:text-[34px] lg:text-[46px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-10 lg:mb-20 pr-4">
                        Pertanyaan Umum Seputar
                        <span className="text-[#f15c12] ml-2 italic font-serif tracking-normal font-medium">Sistem Awas</span>
                    </h2>


                    <div className="flex flex-col gap-4">
                        {categories.map((category) => {
                            const isActive = activeCategory === category;
                            return (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setOpenIndex(0); // auto open first text on category switch
                                    }}
                                    className="flex flex-col text-left focus:outline-none group w-fit"
                                >
                                    <span
                                        className={`text-[14px] md:text-[15px] font-medium transition-colors mb-2 ${isActive ? "text-[#111111]" : "text-gray-400 group-hover:text-gray-600"
                                            }`}
                                    >
                                        {category}
                                    </span>
                                    {isActive && (
                                        <div className="w-[140px] border-b-[2px] border-dotted border-gray-300"></div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column (Accordion) */}
                <div className="w-full lg:w-[65%] flex flex-col gap-4">
                    {currentFaqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-xl border overflow-hidden transition-all duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-5 md:p-6 lg:px-8 text-left focus:outline-none"
                                >
                                    <span className="text-[17px] font-medium text-[#222222] pr-6">{faq.q}</span>
                                    <ChevronDown
                                        className={`w-[22px] h-[22px] text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                                        strokeWidth={2}
                                    />
                                </button>

                                <div
                                    className={`px-5 md:px-6 lg:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] pb-6 lg:pb-8 opacity-100" : "max-h-0 pb-0 opacity-0"}`}
                                >
                                    <p className="text-[15px] leading-[1.7] text-gray-500 pr-4">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
