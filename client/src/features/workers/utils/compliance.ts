import { ShieldCheckIcon, ShieldAlertIcon } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function getComplianceConfig(rate: number): { icon: LucideIcon; className: string } {
  if (rate >= 95) return { icon: ShieldCheckIcon, className: "bg-green-600 hover:bg-green-600 text-white font-extrabold text-[10px] gap-1 h-5" };
  if (rate >= 85) return { icon: ShieldAlertIcon, className: "bg-amber-500 hover:bg-amber-500 text-white font-extrabold text-[10px] gap-1 h-5" };
  return { icon: ShieldAlertIcon, className: "bg-red-500 hover:bg-red-500 text-white font-extrabold text-[10px] gap-1 h-5" };
}
