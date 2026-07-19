import { ShieldCheckIcon, ShieldAlertIcon } from "lucide-react";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";
import { getComplianceColor } from "@/features/zones/utils/compliance";

interface Props {
  complianceScore: number;
  gateCount: number;
}

export function ZoneStats({ complianceScore, gateCount }: Props) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col p-2.5 border rounded-lg bg-muted/10">
        <span className="text-[10px] font-bold text-muted-foreground uppercase">{ZONE_TEXT.complianceLabel}</span>
        <span className={`text-xl font-extrabold mt-1.5 flex items-center gap-1.5 ${getComplianceColor(complianceScore)}`}>
          {complianceScore}%
          {complianceScore >= 90 ? (
            <ShieldCheckIcon className="h-4.5 w-4.5 text-green-600" />
          ) : (
            <ShieldAlertIcon className="h-4.5 w-4.5 text-amber-600" />
          )}
        </span>
      </div>
      <div className="flex flex-col p-2.5 border rounded-lg bg-muted/10">
        <span className="text-[10px] font-bold text-muted-foreground uppercase">{ZONE_TEXT.gateLabel}</span>
        <span className="text-xl font-extrabold mt-1.5">{gateCount} {ZONE_TEXT.gateFormat}</span>
      </div>
    </div>
  );
}
