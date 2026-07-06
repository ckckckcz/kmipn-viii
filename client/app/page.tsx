import { ArrowRight, PlayCircle, Space } from "lucide-react";
import FaqSection from "@/components/FaqSection";

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
        <div className="absolute top-[0%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#dbeafe] blur-[140px] opacity-70 pointer-events-none" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#bfdbfe] blur-[140px] opacity-70 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#eff6ff] blur-[140px] opacity-60 pointer-events-none" />

        {/* Main container resembling a design tool artboard frame */}
        <div className="relative w-[90%] max-w-7xl h-[60vh] min-h-[500px] flex flex-col justify-center items-center">
          {/* Blue stroke borders representing the artboard outline */}
          <div className="absolute top-0 left-[-100vw] right-[-100vw] h-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-[-100vw] right-[-100vw] h-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />
          <div className="absolute top-[-100vh] bottom-[-100vh] left-0 w-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />
          <div className="absolute top-[-100vh] bottom-[-100vh] right-0 w-[1px] bg-[#2563eb] opacity-40 pointer-events-none" />

          {/* Artboard corner markers */}
          <div className="absolute top-[-1px] left-[-1px] w-2 h-2 border-t border-l border-[#2563eb] opacity-100 pointer-events-none" />
          <div className="absolute top-[-1px] right-[-1px] w-2 h-2 border-t border-r border-[#2563eb] opacity-100 pointer-events-none" />
          <div className="absolute bottom-[-1px] left-[-1px] w-2 h-2 border-b border-l border-[#2563eb] opacity-100 pointer-events-none" />
          <div className="absolute bottom-[-1px] right-[-1px] w-2 h-2 border-b border-r border-[#2563eb] opacity-100 pointer-events-none" />

          {/* Content Box */}
          <div className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center px-4 md:px-8 w-full">
            {/* Top Badge */}
            <div className="mb-6 md:mb-10 flex items-center justify-start md:justify-center gap-2 rounded-full border border-[#2563eb]/40 bg-white/40 px-3 py-1.5 md:px-4 md:py-1.5 text-[12px] font-medium text-[#2563eb] shadow-sm backdrop-blur-md">
              🇮🇩 <span className="ml-1">Program Prioritas Nasional</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[1000px] text-[3rem] sm:text-[4.2rem] md:text-[5.5rem] font-medium leading-[1.1] md:leading-[1.1] tracking-[0] text-[#1a1a1a] flex flex-col justify-start md:justify-center items-start md:items-center">
              <div className="flex items-center justify-start md:justify-center flex-wrap sm:flex-nowrap">
                <span className="font-semibold mr-2 md:mr-5 shrink-0">Gizi</span>
                <span className="hidden sm:inline-flex items-center -space-x-2 md:-space-x-4 mx-2 md:mx-4 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop"
                    alt="people"
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-white shadow-md -rotate-6 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=150&fit=crop"
                    alt="people"
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-white shadow-lg z-10 object-cover -translate-y-1 md:-translate-y-3"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=150&h=150&fit=crop"
                    alt="people"
                    className="w-[2.5rem] h-[2.5rem] sm:w-[3.5rem] sm:h-[3.5rem] md:w-[4.5rem] md:h-[4.5rem] rounded-xl md:rounded-2xl border-[2px] md:border-[4px] border-white shadow-md rotate-6 z-0 object-cover"
                  />
                </span>
                <span className="font-semibold mr-0 md:mr-0 ml-1 md:ml-5 shrink-0 mt-1 sm:mt-0">Demi</span>
              </div>
              <div className="w-full text-left md:text-center text-[#2563eb] mt-1 md:mt-[-0.1em]">
                <span className="text-[#2563eb] md:ml-2 italic font-serif tracking-normal font-medium">Generasi Emas.</span>
              </div>
            </h1>

            {/* Subheading */}
            <p className="mt-2 md:mt-4 max-w-[650px] text-[15px] md:text-[17px]text-[#666666] leading-[1.6]">
              Program pemenuhan nutrisi terpadu untuk anak usia sekolah di seluruh Indonesia. Bertujuan mencetak generasi sehat, cerdas, dan tangguh demi mewujudkan fondasi Indonesia Emas 2045.
            </p>

            {/* Action Buttons */}
            <div className="mt-4 md:mt-10 grid grid-cols-2 sm:flex sm:flex-row items-center gap-3 lg:gap-6 relative w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <button className="w-full sm:w-auto group relative z-10 flex h-11 items-center justify-center gap-1 md:gap-2 rounded-full bg-[#2563eb] px-1 md:px-6 text-[13px] md:text-[14px] font-medium text-white transition-all hover:bg-[#1d4ed8] shadow-md hover:shadow-lg">
                  Join Program
                  <ArrowRight className="h-[14px] w-[14px] transition-transform group-hover:-rotate-45 cursor-pointer flex-shrink-0" strokeWidth={2.5} />
                </button>

                {/* Hand-drawn annotation */}
                <div className="hidden md:flex absolute -left-38 -bottom-12 pointer-events-none flex-col items-end z-20">
                  <svg width="42" height="42" viewBox="0 0 100 100" className="mr-6 -mb-1 transform rotate-12" fill="none" stroke="#3182ce" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20,100 Q15,40 80,20" />
                    <path d="M50,15 L80,20 L65,50" />
                  </svg>
                  <span className="text-blue-600 font-serif italic text-[18px] -rotate-6 whitespace-nowrap font-medium">
                    Let's see how it works
                  </span>
                </div>
              </div>

              <button className="w-full sm:w-auto group flex h-11 items-center justify-center gap-1 md:gap-2 rounded-full border border-gray-200 bg-white px-1 md:px-6 text-[13px] md:text-[14px] font-medium text-[#333333] transition-all hover:bg-gray-50 shadow-[0_2px_4px_rgba(0,0,0,0.02)] hover:shadow-md relative z-10">
                <PlayCircle className="h-[16px] w-[16px] text-gray-500 group-hover:text-[#2563eb] transition-colors flex-shrink-0" strokeWidth={1.5} />
                Pelajari Detail
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 
        ==============================
        STEP-BY-STEP SECTION
        ==============================
      */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8 lg:py-24 py-10 flex flex-col items-center">
        {/* Section Heading */}
        <div className="text-left md:text-center max-w-2xl lg:max-w-3xl mb-4 md:mb-16 w-full px-4 md:px-8">
          <h2 className="text-[28px] md:text-[34px] lg:text-[46px] font-bold text-[#111111] leading-[1.15] tracking-tight">
            Bagaimana program ini berjalan,{" "}
            <span className="text-[#2563eb] italic font-serif tracking-normal font-medium">langkah demi langkah.</span>
          </h2>
          <p className="mt-2 md:mt-5 text-[15px] md:text-[17px] text-gray-400 font-medium leading-[1.6] max-w-[500px] md:mx-auto">
            Gambaran sederhana tahapan operasional distribusi nutrisi MBG, mulai dari penyediaan awal hingga gizi diterima oleh anak-anak.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 md:px-8">

          {/* Card 1 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            {/* Multi-layered Colored Background with Texture */}
            <div className="absolute inset-0 bg-[#2563eb] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1d4ed8] to-[#60a5fa] opacity-80" />
              {/* Abstract Pattern overlay */}
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white blur-[24px] opacity-20" />
              <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-blue-300 blur-[30px] opacity-20" />
            </div>

            {/* White Foreground Card */}
            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-blue-600/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">1</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Mengenali kebutuhan</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Kami memulai dengan mendata secara riil. Memahami jumlah siswa, spesifikasi nutrisi seimbang, hingga kondisi suplai sekolah setiap daerah.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            <div className="absolute inset-0 bg-[#2563eb] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-tl from-[#1e40af] to-[#3b82f6] opacity-90" />
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white blur-[24px] opacity-10" />
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-blue-300 blur-[28px] opacity-20" />
            </div>

            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-blue-600/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">2</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Penyediaan bahan</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Dari target awal menuju eksekusi, kami memastikan agar pasokan bahan makanan segar dikurasi ketat dan sepenuhnya disuplai oleh petani lokal.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            <div className="absolute inset-0 bg-[#2563eb] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1d4ed8] to-[#93c5fd] opacity-80" />
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white blur-[30px] opacity-10" />
            </div>

            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-blue-600/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">3</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Pengolahan terpusat</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Kami mengubah suplai menjadi sajian, memprioritaskan higienitas, kecukupan gizi hewani maupun nabati dan kalori berbasis standar ahli.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative group w-full h-full min-h-[320px] cursor-pointer perspective-[1000px]">
            <div className="absolute inset-0 bg-[#2563eb] rounded-2xl shadow-[0_8px_30px_rgba(37,99,235,0.3)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden scale-[0.98]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] opacity-90" />
              <div className="absolute inset-0 opacity-[0.25] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white blur-[20px] opacity-15" />
              <div className="absolute -top-12 -right-8 w-40 h-40 rounded-full bg-blue-400 blur-[30px] opacity-20" />
            </div>

            <div className="absolute inset-0 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] pt-1 pl-6 pr-6 pb-6 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-rotate-[5deg] group-hover:-translate-x-3 group-hover:-translate-y-3 origin-bottom-left will-change-transform z-10 overflow-hidden">
              <span className="absolute -top-6 -right-5 text-[120px] font-black text-blue-600/6 select-none z-0 transition-opacity duration-500 group-hover:text-blue-50/50">4</span>
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-[22px] lg:text-[24px] font-bold text-[#111111] leading-tight mb-4 tracking-tight mt-6">Menyajikan nutrisi</h3>
                <p className="text-[14px] text-gray-500 leading-[1.6] mt-auto pt-4">
                  Kami melakukan pemantauan, mulai dari distribusi hingga penyajian akhir tepat waktu, demi memastikan hak nutrisi putra-putri kita terpenuhi.
                </p>
              </div>
            </div>
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
