import { ArrowRight, PlayCircle, Shield, Building, Users } from "lucide-react";
import FaqSection from "@/features/landing/components/FaqSection";

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-[#fdfdfd] overflow-x-hidden font-sans tracking-tight">
      {/* 
        ==============================
        HERO SECTION
        ==============================
      */}
      <div className="relative lg:min-h-screen lg:mt-0 mt-5 w-full flex items-center justify-center pt-20">
        {/* Background soft gradients */}
        <div className="absolute top-[0%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#f15c12]/5 blur-[140px] opacity-70 pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#f15c12]/5 blur-[140px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#f15c12]/5 blur-[140px] opacity-60 pointer-events-none" />

        {/* Main container resembling a design tool artboard frame */}
        <div className="relative w-[90%] max-w-7xl h-[60vh] min-h-[500px] flex flex-col justify-center items-center">
          {/* Blue stroke borders representing the artboard outline */}
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-[#f15c12] opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-[#f15c12] opacity-40 pointer-events-none" />
          <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-[1px] bg-[#f15c12] opacity-40 pointer-events-none" />
          <div className="absolute top-[-100vh] bottom-[-100vh] right-0 w-[1px] bg-[#f15c12] opacity-40 pointer-events-none" />

          {/* Artboard corner markers */}
          <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-[#f15c12] opacity-100 pointer-events-none" />
          <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-[#f15c12] opacity-100 pointer-events-none" />
          <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-[#f15c12] opacity-100 pointer-events-none" />
          <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-[#f15c12] opacity-100 pointer-events-none" />

          {/* Content Box */}
          <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center px-4 md:px-8 w-full">
            {/* Top Badge */}
            <div className="mb-6 md:mb-10 flex items-center justify-start md:justify-center gap-2 rounded-full border border-[#f15c12]/40 bg-white/40 px-3 py-1.5 md:px-4 md:py-1.5 text-[12px] font-medium text-[#f15c12] shadow-sm backdrop-blur-md">
              🇮🇩 <span className="ml-1">Tim Kuli Ketik Shift Satu</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[1000px] text-[3rem] sm:text-[4.2rem] md:text-[5.5rem] font-medium leading-[1.1] md:leading-[1.1] tracking-[0] text-[#1a1a1a] flex flex-col justify-start md:justify-center items-start md:items-center">
              <div className="flex items-center justify-start md:justify-center flex-wrap sm:flex-nowrap">
                <span className="font-semibold mr-2 md:mr-5 shrink-0">Kerja</span>
                <span className="hidden sm:inline-flex items-center -space-x-2 md:-space-x-4 mx-2 md:mx-4 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&h=150&fit=crop"
                    alt="safety worker"
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-white shadow-md -rotate-6 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=150&h=150&fit=crop"
                    alt="engineer"
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-white shadow-lg z-10 object-cover -translate-y-1 md:-translate-y-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=150&h=150&fit=crop"
                    alt="industrial floor"
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-white shadow-md rotate-6 z-0 object-cover"
                  />
                </span>
                <span className="font-semibold mr-0 md:mr-0 ml-1 md:ml-5 shrink-0 mt-1 sm:mt-0">Aman</span>
              </div>
              <div className="w-full text-left md:text-center text-[#f15c12] mt-1 md:mt-[-0.1em]">
                <span className="text-[#f15c12] md:ml-2 italic font-serif tracking-normal font-medium">Melalui Awas.</span>
              </div>
            </h1>

            {/* Subheading */}
            <p className="mt-2 md:mt-4 max-w-[650px] text-[15px] md:text-[17px] text-[#666666] leading-[1.6]">
              Sistem Pengawasan Kepatuhan Penggunaan APD berbasis Artificial Intelligence Computer Vision. Memverifikasi APD pekerja secara otomatis dan real-time untuk menjamin perlindungan K3 di area industri berisiko tinggi.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 md:mt-10 grid grid-cols-2 sm:flex sm:flex-row items-center gap-3 lg:gap-6 relative w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <a href="/login" className="w-full sm:w-auto group relative z-10 flex h-11 items-center justify-center gap-1 md:gap-2 rounded-full bg-[#f15c12] px-1 md:px-6 text-[13px] md:text-[14px] font-medium text-white transition-all hover:bg-[#d44805] shadow-md hover:shadow-lg">
                  Pelajari Fitur
                  <PlayCircle className="h-[16px] w-[16px] text-white transition-colors flex-shrink-0" strokeWidth={1.5} />
                </a>

                {/* Hand-drawn annotation */}
                <div className="hidden md:flex absolute -left-42 -bottom-12 pointer-events-none flex-col items-end z-20">
                  <svg width="42" height="42" viewBox="0 0 100 100" className="mr-6 -mb-1 transform rotate-12" fill="none" stroke="#f15c12" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20,100 Q15,40 80,20" />
                    <path d="M50,15 L80,20 L65,50" />
                  </svg>
                  <span className="text-[#f15c12] font-serif italic text-[18px] -rotate-6 whitespace-nowrap font-medium">
                    Kalau bingung kesini ya 
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ==============================
        OBJECTIVES (TUJUAN) SECTION
        ==============================
      */}
      <section id="tujuan" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:py-24 py-10 flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-left md:text-center max-w-2xl lg:max-w-3xl mb-4 md:mb-16 w-full px-4 md:px-8">
          <h2 className="text-[28px] md:text-[34px] lg:text-[46px] font-bold text-[#111111] leading-[1.15] tracking-tight">
            Tujuan utama gagasan,{" "}
            <span className="text-[#f15c12] italic font-serif tracking-normal font-medium">Awas Sistem.</span>
          </h2>
          <p className="mt-2 md:mt-5 text-[15px] md:text-[17px] text-gray-500 leading-[1.6] max-w-[600px] md:mx-auto">
            Penyusunan gagasan Awas bertujuan untuk mewujudkan keselamatan kerja industri melalui integrasi teknologi cerdas kecerdasan buatan.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-8">

          {/* Card 1 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            {/* Multi-layered Colored Background with Texture */}
            <div className="absolute inset-0 bg-[#f15c12] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1d4ed8] to-[#60a5fa] opacity-80" />
              {/* Abstract Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white blur-[24px] opacity-20" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-blue-300 blur-[30px] opacity-20" />
            </div>

            {/* White Foreground Card */}
            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-[#f15c12]/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">1</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[20px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Deteksi AI Real-Time</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Merancang sistem pengawasan kepatuhan penggunaan APD berbasis AI Computer Vision yang memverifikasi APD pekerja secara otomatis dan real-time di area industri berisiko tinggi.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            <div className="absolute inset-0 bg-[#f15c12] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-tl from-[#1e40af] to-[#3b82f6] opacity-90" />
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white blur-[24px] opacity-10" />
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-300 blur-[28px] opacity-20" />
            </div>

            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-[#f15c12]/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">2</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[20px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Kontrol Akses Terpadu</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Menyediakan mekanisme kontrol akses (gate control) yang hanya mengizinkan pekerja dengan APD lengkap memasuki area kerja, serta pemantauan pasif CCTV.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            <div className="absolute inset-0 bg-[#f15c12] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-80" />
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white blur-[30px] opacity-10" />
            </div>

            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-[#f15c12]/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">3</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[20px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Dashboard & Compliance</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Membangun basis data dan dashboard kepatuhan yang menyajikan analitik tingkat kepatuhan APD sebagai dasar pengambilan keputusan manajemen K3.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            <div className="absolute inset-0 bg-[#f15c12] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] opacity-90" />
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white blur-[20px] opacity-15" />
              <div className="absolute -top-12 -right-8 w-40 h-40 rounded-full bg-blue-400 blur-[30px] opacity-20" />
            </div>

            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-[#f15c12]/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">4</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[20px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Reduksi Pengawasan Manual</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Mengurangi ketergantungan pada pengawasan manual yang tidak konsisten sehingga menekan angka kecelakaan kerja secara signifikan akibat ketidakpatuhan APD.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 
        ==============================
        BENEFITS (MANFAAT) SECTION
        ==============================
      */}
      <section id="manfaat" className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:py-24 py-10 bg-white my-10 flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-left md:text-center max-w-2xl lg:max-w-3xl mb-12 md:mb-16 w-full px-4 md:px-8">
          <h2 className="text-[28px] md:text-[34px] lg:text-[46px] font-bold text-[#111111] leading-[1.15] tracking-tight">
            Manfaat yang dihadirkan,{" "}
            <span className="text-[#f15c12] italic font-serif tracking-normal font-medium">untuk ekosistem industri.</span>
          </h2>
          <p className="mt-2 md:mt-5 text-[15px] md:text-[17px] text-gray-500 leading-[1.6] max-w-[600px] md:mx-auto">
            Implementasi Awas memberikan dampak positif dan perlindungan menyeluruh bagi setiap pihak yang terlibat.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full px-4 md:px-8">
          {/* Pekerja */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#f15c12] transition-colors duration-300">
              <Shield className="w-6 h-6 text-[#f15c12] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-3">Bagi Pekerja</h3>
            <p className="text-[14.5px] text-gray-500 leading-relaxed">
              Menjamin terpenuhinya standar perlindungan diri sebelum memasuki area kerja sehingga menurunkan risiko cedera dan kematian akibat kecelakaan kerja secara signifikan.
            </p>
          </div>

          {/* Perusahaan */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#f15c12] transition-colors duration-300">
              <Building className="w-6 h-6 text-[#f15c12] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-3">Bagi Perusahaan</h3>
            <p className="text-[14.5px] text-gray-500 leading-relaxed">
              Menyediakan pengawasan K3 yang objektif, transparan, dan terdokumentasi secara real-time, menurunkan potensi kerugian akibat kecelakaan kerja, serta mendukung penuh pemenuhan kewajiban regulasi SMK3.
            </p>
          </div>

          {/* Pemerintah dan Masyarakat */}
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg transition-all duration-300 flex flex-col group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#f15c12] transition-colors duration-300">
              <Users className="w-6 h-6 text-[#f15c12] group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-[20px] font-bold text-gray-900 mb-3">Bagi Pemerintah & Masyarakat</h3>
            <p className="text-[14.5px] text-gray-500 leading-relaxed">
              Mendukung penegakan regulasi K3 nasional dan berkontribusi langsung pada penurunan angka kecelakaan kerja nasional yang sering kali menjadi beban sosial serta ekonomi bagi negara.
            </p>
          </div>
        </div>
      </section>

      {/* 
        ==============================
        FAQ SECTION
        ==============================
      */}
      <FaqSection />
    </main>
  );
}
