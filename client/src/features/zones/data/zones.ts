import { Zone } from "@/types";

// ponytail: keep static raw data simple, no functions here. Functions will be in context or mock api helpers.
export const INITIAL_ZONES: Zone[] = [
  {
    id: "zone-1",
    name: "Zona A - Filling & Processing",
    description: "Area pengisian dan pemrosesan susu cair steril. Higienitas tinggi diperlukan.",
    riskLevel: "high",
    requiredPpe: ["helmet", "mask", "lab_coat", "gloves"],
    complianceScore: 92.4,
    gateCount: 2,
  },
  {
    id: "zone-2",
    name: "Zona B - Packing Line 1",
    description: "Area pengemasan karton produk akhir. Potensi paparan mesin bergerak.",
    riskLevel: "medium",
    requiredPpe: ["helmet", "mask", "safety_shoes", "hairnet"],
    complianceScore: 88.5,
    gateCount: 1,
  },
  {
    id: "zone-3",
    name: "Zona C - Warehouse & Loading",
    description: "Area penyimpanan logistik dan muatan barang. Lalu lintas forklift padat.",
    riskLevel: "high",
    requiredPpe: ["helmet", "safety_shoes"],
    complianceScore: 94.2,
    gateCount: 2,
  },
  {
    id: "zone-4",
    name: "Zona D - Raw Material Prep",
    description: "Area penyiapan bahan baku susu segar dan pencampuran formula dasar.",
    riskLevel: "medium",
    requiredPpe: ["helmet", "mask", "gloves", "safety_shoes"],
    complianceScore: 78.9,
    gateCount: 1,
  },
];
