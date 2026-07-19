import { InsightType } from "@/features/ai-safety-officer/types/insight";

export const INSIGHT_ICON_COLOR: Record<InsightType, string> = {
  warning: "text-amber-500",
  alert: "text-red-500",
  success: "text-green-500",
};
