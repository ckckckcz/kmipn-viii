import { Insight } from "@/features/ai-safety-officer/types/insight";

export const INSIGHTS: Insight[] = [
  {
    id: "insight-1",
    title: "Peningkatan Pelanggaran Masker di Zona A",
    description: "Zona A - Filling & Processing mengalami lonjakan pelanggaran APD berupa tidak menggunakan masker sebesar 15% pada shift malam minggu ini. Disarankan melakukan evaluasi ketersediaan stok masker di dispenser gerbang masuk.",
    type: "warning",
    date: "Hari Ini",
  },
  {
    id: "insight-2",
    title: "Penurunan Compliance Score Zona D",
    description: "Compliance score Zona D - Raw Material Prep menurun dari 84% ke 78.9% dalam 3 hari terakhir. Kategori pelanggaran terbanyak didominasi oleh ketidakpatuhan penggunaan Kacamata Safety dan Helm.",
    type: "alert",
    date: "Kemarin",
  },
  {
    id: "insight-3",
    title: "Apresiasi K3 Terhadap Zona C",
    description: "Zona C - Warehouse & Loading sukses mempertahankan compliance score rata-rata di atas 94% selama 14 hari berturut-turut. Rekomendasi pemberian reward K3 untuk tim shift kerja terkait.",
    type: "success",
    date: "3 Hari Lalu",
  },
];
