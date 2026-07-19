import { AlertCircleIcon, ShieldCheckIcon } from "lucide-react";
import { InsightType } from "@/features/ai-safety-officer/types/insight";

export const INSIGHT_ICON: Record<InsightType, typeof AlertCircleIcon> = {
  warning: AlertCircleIcon,
  alert: AlertCircleIcon,
  success: ShieldCheckIcon,
};
