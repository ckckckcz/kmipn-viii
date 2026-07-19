import { Zone, PpeType } from "@/types";
import { ScanStatus } from "@/features/gate-monitor/types/gate";
import { PpeChecklistItem } from "@/features/gate-monitor/components/PpeChecklistItem";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";

interface Props {
  zone: Zone;
  scanStatus: ScanStatus;
  isPpeItemMissing: (item: PpeType) => boolean;
}

export function PpeChecklist({ zone, scanStatus, isPpeItemMissing }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
        {GATE_TEXT.ppeRequirements} {zone.name.split(" - ")[0]}
      </h5>
      <div className="flex flex-col gap-1.5">
        {zone.requiredPpe.map((ppe: PpeType) => (
          <PpeChecklistItem key={ppe} ppe={ppe} isMissing={isPpeItemMissing(ppe)} scanStatus={scanStatus} />
        ))}
      </div>
    </div>
  );
}
