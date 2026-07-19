import type { Zone } from "@/types";

export function getRiskBadgeConfig(level: Zone["riskLevel"]): { className: string; label: string } {
  switch (level) {
    case "low":
      return {
        className: "bg-green-100 text-green-800 dark:bg-green-950/30 dark:text-green-400 border border-green-200 dark:border-green-900/50",
        label: "Risiko Rendah",
      };
    case "medium":
      return {
        className: "bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50",
        label: "Risiko Sedang",
      };
    case "high":
      return {
        className: "bg-red-100 text-red-800 dark:bg-red-950/30 dark:text-red-400 border border-red-200 dark:border-red-900/50",
        label: "Risiko Tinggi",
      };
  }
}
