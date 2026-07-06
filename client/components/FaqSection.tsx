"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
    const categories = [
        "Umum",
        "Distribusi & Logistik",
        "Nutrisi & Menu",
        "Pihak Terlibat",
        "Pelaporan Kendala"
    ];

    const [activeCategory, setActiveCategory] = useState("Umum");
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const questions = {
        "Umum": [
            {
                q: "Apa itu Program Makan Bergizi Gratis (MBG)?",
                a: "MBG adalah program prioritas nasional yang menyediakan makanan bergizi seimbang secara gratis untuk anak-anak usia sekolah di seluruh Indonesia guna mendukung pertumbuhan dan kecerdasan bangsa."
            },
            {
                q: "Siapa yang berhak menerima manfaat dari program ini?",
                a: "Target utama meliputi siswa PAUD, SD, SMP, SMA/SMK Negeri maupun Swasta, serta pondok pesantren dan institusi pendidikan setingkat lainnya di berbagai daerah."
            },
            {
                q: "Apakah program ini memungut biaya dari siswa atau sekolah?",
                a: "Tidak. Seluruh pendanaan berasal dari alokasi APBN pemerintah pusat dan didukung penuh tanpa memungut biaya sepeserpun dari instansi sekolah atau orang tua siswa."
            },
            {
                q: "Bagaimana cara mendaftarkan sekolah yang belum masuk program?",
                a: "Sekolah akan didata secara otomatis dan bertahap oleh Dinas Pendidikan di masing-masing wilayah, lalu diverifikasi kelayakannya sesuai prioritas area."
            },
            {
                q: "Bisakah orang tua memantau menu harian anak?",
                a: "Tentu. Melalui platform distribusi digital ini, orang tua dan publik dapat memantau pelacakan rute dan transparansi detail menu harian."
            }
        ],
        "Distribusi & Logistik": [
            {
                q: "Bagaimana proses distribusi makanan ke sekolah terpencil?",
                a: "Pemerintah bekerja sama dengan aparat TNI/Polri dan jaringan logistik lokal untuk memastikan distribusi hantaran makanan masuk secara aman walau ke wilayah 3T."
            },
            {
                q: "Jam berapa makanan akan dibagikan ke siswa?",
                a: "Proses distribusi puncak dan pembagian makanan diposisikan agar siap santap pada jam istirahat pertama sekolah."
            }
        ],
        "Nutrisi & Menu": [
            {
                q: "Bagaimana standar gizi dari menu yang diberikan?",
                a: "Menu disusun ketat oleh ahli gizi dari Kementerian Kesehatan, memastikan setiap kotak makanan memenuhi kecukupan kalori (susu, karbohidrat, sayuran, dan lauk hewani)."
            },
            {
                q: "Apakah ada penyesuaian untuk anak alergi?",
                a: "Ya, pihak tenaga pendidik di sekolah akan diberikan fasilitas pendataan alergi profil siswa sebelumnya untuk menyesuaikan kotak menu khusus."
            }
        ],
        "Pihak Terlibat": [
            {
                q: "Siapa yang memasak dan menyediakan masakan MBG?",
                a: "Makanan dimasak berpusat pada Dapur Umum Terpadu (DUT) di tiap kecamatan yang mempekerjakan ratusan warga lokal dengan pengawasan sanitasi sangat ketat."
            },
            {
                q: "Apakah petani lokal akan dilibatkan?",
                a: "Sangat. Bahan pokok mulai dari beras, telur, sayur hingga susu sapi sepenuhnya menggunakan skema pemberdayaan ekonomi peternak dan petani daerah setempat."
            }
        ],
        "Pelaporan Kendala": [
            {
                q: "Bagaimana jika kualitas makanan yang diterima tidak baik?",
                a: "Komite sekolah maupun orang tua wajib langsung melaporkan penemuan tersebut dengan menyertakan bukti foto ke fitur pelaporan platform kami. Akan diinvestigasi instan."
            }
        ]
    };

    const currentFaqs = questions[activeCategory as keyof typeof questions] || [];

    return (
        <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:py-24 py-10 mb-10">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 w-full px-4 md:px-8">

                {/* Left Column */}
                <div className="w-full lg:w-[35%] flex flex-col shrink-0">
                    <h2 className="text-[28px] md:text-[34px] lg:text-[46px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-10 lg:mb-20 pr-4">
                        Pertanyaan Umum Seputar
                        <span className="text-[#2563eb] ml-2 italic font-serif tracking-normal font-medium">Program MBG</span>
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
