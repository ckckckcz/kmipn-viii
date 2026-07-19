import { Violation } from "@/types";

export const INITIAL_VIOLATIONS: Violation[] = [
  {
    id: "violation-1",
    workerId: "worker-1", // Supriyadi
    zoneId: "zone-2", // Zone B
    missingPpe: ["hairnet"],
    screenshotUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    confidenceScore: 89,
    followUpStatus: "new",
    supervisorNote: "Terdeteksi saat memasuki Gate 1 Packing Line.",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 min ago
  },
  {
    id: "violation-2",
    workerId: "worker-2", // Joko Anwar
    zoneId: "zone-4", // Zone D
    missingPpe: ["helmet", "gloves"],
    screenshotUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    confidenceScore: 92,
    followUpStatus: "in_progress",
    supervisorNote: "Pekerja mengklaim sarung tangan basah dan helm tertinggal di loker.",
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(), // 25 min ago
  },
  {
    id: "violation-3",
    workerId: "worker-3", // Andi Wijaya
    zoneId: "zone-1", // Zone A
    missingPpe: ["mask"],
    screenshotUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
    confidenceScore: 87,
    followUpStatus: "new",
    supervisorNote: "",
    timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(), // 1.25 hours ago
  },
  {
    id: "violation-4",
    workerId: "worker-4", // Dewi Lestari
    zoneId: "zone-4", // Zone D
    missingPpe: ["helmet"],
    screenshotUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    confidenceScore: 94,
    followUpStatus: "resolved",
    supervisorNote: "Sudah diberikan helm cadangan dari pos security dan diberikan teguran lisan.",
    timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(), // 3 hours ago
  },
  {
    id: "violation-5",
    workerId: "worker-5", // Rudi Hermawan
    zoneId: "zone-3", // Zone C
    missingPpe: ["helmet"],
    screenshotUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    confidenceScore: 88,
    followUpStatus: "resolved",
    supervisorNote: "Pekerja langsung memakai helm setelah diperingatkan sistem audio otomatis.",
    timestamp: new Date(Date.now() - 320 * 60 * 1000).toISOString(), // 5 hours ago
  },
  {
    id: "violation-6",
    workerId: "worker-1", // Supriyadi
    zoneId: "zone-2", // Zone B
    missingPpe: ["mask"],
    screenshotUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
    confidenceScore: 91,
    followUpStatus: "in_progress",
    supervisorNote: "Sedang dilakukan pengecekan stok masker di Gate 1.",
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
  },
  {
    id: "violation-7",
    workerId: "worker-2", // Joko Anwar
    zoneId: "zone-4", // Zone D
    missingPpe: ["safety_shoes"],
    screenshotUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    confidenceScore: 85,
    followUpStatus: "new",
    supervisorNote: "",
    timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(), // ~1.2 days ago
  },
  {
    id: "violation-8",
    workerId: "worker-8", // Hendra Wijaya
    zoneId: "zone-1", // Zone A
    missingPpe: ["lab_coat"],
    screenshotUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
    confidenceScore: 93,
    followUpStatus: "resolved",
    supervisorNote: "Mengenakan jas lab yang basah diganti dengan jas lab kering cadangan.",
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
  },
];
