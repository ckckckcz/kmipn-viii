import { Badge } from "@/components/ui/badge";
import { getRiskBadgeConfig } from "@/features/zones/utils/riskBadge";
import type { Zone } from "@/types";

interface Props {
  level: Zone["riskLevel"];
}

export function RiskBadge({ level }: Props) {
  const cfg = getRiskBadgeConfig(level);
  return <Badge variant="secondary" className={cfg.className}>{cfg.label}</Badge>;
}
