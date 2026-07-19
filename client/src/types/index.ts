// ponytail: Keep types simple, native, and matching Section 8 of PRD exactly.
export type PpeType = "helmet" | "hairnet" | "mask" | "gloves" | "safety_shoes" | "lab_coat";

export type Zone = {
  id: string;
  name: string;
  description: string;
  riskLevel: "low" | "medium" | "high";
  requiredPpe: PpeType[];
  complianceScore: number; // 0-100
  gateCount: number;
};

export type Worker = {
  id: string;
  name: string;
  idCardNumber: string;
  photoUrl: string;
  zoneId: string;
  complianceRate: number; // 0-100
};

export type AccessLog = {
  id: string;
  workerId: string;
  zoneId: string;
  gateName: string;
  status: "granted" | "denied";
  missingPpe: PpeType[];
  timestamp: string; // ISO
};

export type Violation = {
  id: string;
  workerId: string;
  zoneId: string;
  missingPpe: PpeType[];
  screenshotUrl: string; // placeholder image
  confidenceScore: number; // dummy, e.g. 87
  followUpStatus: "new" | "in_progress" | "resolved";
  supervisorNote?: string;
  timestamp: string;
};

export const PPE_LABELS: Record<PpeType, string> = {
  helmet: "Helm",
  hairnet: "Hairnet",
  mask: "Masker",
  gloves: "Sarung Tangan",
  safety_shoes: "Sepatu Safety",
  lab_coat: "Jas Lab",
};
