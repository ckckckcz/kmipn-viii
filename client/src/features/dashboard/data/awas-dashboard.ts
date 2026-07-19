export type Zone = {
  id: string;
  name: string;
  requiredPpe: string[]; // e.g. ["helmet", "mask", "safety_shoes", "gloves", "safety_vest", "safety_glasses"]
  complianceScore: number; // 0-100
};

export type AccessLog = {
  id: string;
  workerName: string;
  zoneName: string;
  status: "granted" | "denied";
  missingPpe: string[];
  timestamp: string; // ISO date
};

export type Violation = {
  id: string;
  workerName: string;
  zoneName: string;
  missingPpe: string[];
  screenshotUrl: string; // placeholder image path
  timestamp: string;
  followUpStatus: "new" | "in_progress" | "resolved";
};

export type SafetyOfficer = {
  id: string;
  name: string;
  role: string;
  status: "Online" | "Away";
  assignedViolations: number;
  image: string;
};

// 4 Active Work Zones
export const DUMMY_ZONES: Zone[] = [
  {
    id: "zone-1",
    name: "Zona A - Filling & Processing",
    requiredPpe: ["Helm", "Masker", "Jas Lab", "Sarung Tangan"],
    complianceScore: 92.4,
  },
  {
    id: "zone-2",
    name: "Zona B - Packing Line 1",
    requiredPpe: ["Helm", "Masker", "Sepatu Safety", "Hairnet"],
    complianceScore: 88.5,
  },
  {
    id: "zone-3",
    name: "Zona C - Warehouse & Loading",
    requiredPpe: ["Helm", "Sepatu Safety", "Rompi Safety"],
    complianceScore: 94.2,
  },
  {
    id: "zone-4",
    name: "Zona D - Raw Material Preparation",
    requiredPpe: ["Helm", "Masker", "Kacamata Safety", "Sarung Tangan", "Sepatu Safety"],
    complianceScore: 78.9,
  },
];

// Safety Officers (replacing boilerplate customer service team)
export const DUMMY_OFFICERS: SafetyOfficer[] = [
  {
    id: "officer-1",
    name: "Budi Santoso",
    role: "Koordinator K3 Utama",
    status: "Online",
    assignedViolations: 2,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&q=80",
  },
  {
    id: "officer-2",
    name: "Rian Hidayat",
    role: "Supervisor Shift A",
    status: "Online",
    assignedViolations: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&q=80",
  },
  {
    id: "officer-3",
    name: "Siti Rahma",
    role: "Inspector K3 Area Processing",
    status: "Away",
    assignedViolations: 1,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&q=80",
  },
  {
    id: "officer-4",
    name: "Eko Prasetyo",
    role: "Supervisor Shift B",
    status: "Online",
    assignedViolations: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&q=80",
  },
];

// Recent Violations (with real-looking worker names and missing PPE)
export const DUMMY_VIOLATIONS: Violation[] = [
  {
    id: "violation-1",
    workerName: "Supriyadi",
    zoneName: "Zona B - Packing Line 1",
    missingPpe: ["Hairnet"],
    screenshotUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 min ago
    followUpStatus: "new",
  },
  {
    id: "violation-2",
    workerName: "Joko Anwar",
    zoneName: "Zona D - Raw Material Preparation",
    missingPpe: ["Kacamata Safety", "Sarung Tangan"],
    screenshotUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(), // 25 min ago
    followUpStatus: "in_progress",
  },
  {
    id: "violation-3",
    workerName: "Andi Wijaya",
    zoneName: "Zona A - Filling & Processing",
    missingPpe: ["Masker"],
    screenshotUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop",
    timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(), // 1.25 hours ago
    followUpStatus: "new",
  },
  {
    id: "violation-4",
    workerName: "Dewi Lestari",
    zoneName: "Zona D - Raw Material Preparation",
    missingPpe: ["Helm"],
    screenshotUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=200&fit=crop",
    timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(), // 3 hours ago
    followUpStatus: "resolved",
  },
  {
    id: "violation-5",
    workerName: "Rudi Hermawan",
    zoneName: "Zona C - Warehouse & Loading",
    missingPpe: ["Rompi Safety"],
    screenshotUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop",
    timestamp: new Date(Date.now() - 320 * 60 * 1000).toISOString(), // ~5 hours ago
    followUpStatus: "resolved",
  },
];

// Gate Access Logs (Mix of granted and denied entries across the last few days)
export const DUMMY_ACCESS_LOGS: AccessLog[] = [
  {
    id: "log-1",
    workerName: "Supriyadi",
    zoneName: "Zona B - Packing Line 1",
    status: "denied",
    missingPpe: ["Hairnet"],
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  },
  {
    id: "log-2",
    workerName: "Agus Pratama",
    zoneName: "Zona A - Filling & Processing",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
  },
  {
    id: "log-3",
    workerName: "Joko Anwar",
    zoneName: "Zona D - Raw Material Preparation",
    status: "denied",
    missingPpe: ["Kacamata Safety", "Sarung Tangan"],
    timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
  },
  {
    id: "log-4",
    workerName: "Siti Aminah",
    zoneName: "Zona C - Warehouse & Loading",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
  },
  {
    id: "log-5",
    workerName: "Hendra Wijaya",
    zoneName: "Zona A - Filling & Processing",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 62 * 60 * 1000).toISOString(),
  },
  {
    id: "log-6",
    workerName: "Andi Wijaya",
    zoneName: "Zona A - Filling & Processing",
    status: "denied",
    missingPpe: ["Masker"],
    timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
  },
  {
    id: "log-7",
    workerName: "Rina Marlina",
    zoneName: "Zona B - Packing Line 1",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
  },
  {
    id: "log-8",
    workerName: "Dewi Lestari",
    zoneName: "Zona D - Raw Material Preparation",
    status: "denied",
    missingPpe: ["Helm"],
    timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(),
  },
  {
    id: "log-9",
    workerName: "Taufik Hidayat",
    zoneName: "Zona C - Warehouse & Loading",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 240 * 60 * 1000).toISOString(),
  },
  {
    id: "log-10",
    workerName: "Rudi Hermawan",
    zoneName: "Zona C - Warehouse & Loading",
    status: "denied",
    missingPpe: ["Rompi Safety"],
    timestamp: new Date(Date.now() - 320 * 60 * 1000).toISOString(),
  },
  // Day before logs...
  {
    id: "log-11",
    workerName: "Heri Susanto",
    zoneName: "Zona A - Filling & Processing",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "log-12",
    workerName: "Edi Hartono",
    zoneName: "Zona D - Raw Material Preparation",
    status: "denied",
    missingPpe: ["Kacamata Safety"],
    timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "log-13",
    workerName: "Lia Dahlia",
    zoneName: "Zona B - Packing Line 1",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "log-14",
    workerName: "Wawan Setiawan",
    zoneName: "Zona C - Warehouse & Loading",
    status: "granted",
    missingPpe: [],
    timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "log-15",
    workerName: "Mulyadi",
    zoneName: "Zona D - Raw Material Preparation",
    status: "denied",
    missingPpe: ["Sepatu Safety"],
    timestamp: new Date(Date.now() - 32 * 60 * 60 * 1000).toISOString(),
  },
];

// Violation Trend Data (conversations -> violations count)
export const DUMMY_VIOLATION_TREND = [
  { date: "2026-07-01", violations: 12, granted: 110, complianceRate: 90.2 },
  { date: "2026-07-02", violations: 15, granted: 105, complianceRate: 87.5 },
  { date: "2026-07-03", violations: 8, granted: 115, complianceRate: 93.5 },
  { date: "2026-07-04", violations: 9, granted: 98, complianceRate: 91.6 },
  { date: "2026-07-05", violations: 14, granted: 85, complianceRate: 85.9 },
  { date: "2026-07-06", violations: 11, granted: 120, complianceRate: 91.6 },
  { date: "2026-07-07", violations: 6, granted: 125, complianceRate: 95.4 },
  { date: "2026-07-08", violations: 18, granted: 130, complianceRate: 87.8 },
  { date: "2026-07-09", violations: 10, granted: 122, complianceRate: 92.4 },
  { date: "2026-07-10", violations: 7, granted: 118, complianceRate: 94.4 },
  { date: "2026-07-11", violations: 5, granted: 90, complianceRate: 94.7 },
  { date: "2026-07-12", violations: 12, granted: 82, complianceRate: 87.2 },
  { date: "2026-07-13", violations: 9, granted: 135, complianceRate: 93.8 },
  { date: "2026-07-14", violations: 14, granted: 142, complianceRate: 91.0 },
];

// Violation Breakdown by APD type (Pie/Donut data)
export const DUMMY_APD_BREAKDOWN = [
  { ppeType: "Masker", count: 32, fill: "var(--chart-1)" },
  { ppeType: "Helm", count: 24, fill: "var(--chart-2)" },
  { ppeType: "Hairnet", count: 18, fill: "var(--chart-3)" },
  { ppeType: "Rompi Safety", count: 12, fill: "var(--chart-4)" },
  { ppeType: "Kacamata Safety", count: 9, fill: "var(--chart-5)" },
  { ppeType: "Lainnya", count: 5, fill: "var(--muted-foreground)" },
];

// Average follow-up / resolution time trend in hours
export const DUMMY_RESOLUTION_TIME_TREND = [
  { day: "Sen", hours: 2.1 },
  { day: "Sel", hours: 1.8 },
  { day: "Rab", hours: 1.5 },
  { day: "Kam", hours: 1.2 },
  { day: "Jum", hours: 0.9 },
  { day: "Sab", hours: 1.1 },
  { day: "Min", hours: 0.8 },
];

// Helper mock service to return dashboard summary
export function getDashboardSummary() {
  const activeZones = DUMMY_ZONES.length;
  
  // Natural numbers for demo
  const totalToday = 248; 
  const deniedToday = 14; 
  const overallCompliance = 94.3;
  
  return {
    complianceScore: {
      value: `${overallCompliance}%`,
      delta: 1.8,
      footnote: "vs kemarin",
      lowerIsBetter: false,
    },
    totalAccess: {
      value: String(totalToday),
      delta: 8.4,
      footnote: "vs kemarin",
      lowerIsBetter: false,
    },
    totalViolations: {
      value: String(deniedToday),
      delta: -15.2,
      footnote: "vs kemarin",
      lowerIsBetter: true,
    },
    activeZones: {
      value: String(activeZones),
      delta: 0,
      footnote: "tidak ada perubahan",
      lowerIsBetter: false,
    }
  };
}
