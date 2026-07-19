import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UnlockIcon, LockIcon } from "lucide-react";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";
import { ScanStatus } from "@/features/gate-monitor/types/gate";
import { Worker, Zone, PpeType } from "@/types";
import { GateStatus } from "@/features/gate-monitor/components/GateStatus";
import { WorkerCard } from "@/features/gate-monitor/components/WorkerCard";
import { PpeChecklist } from "@/features/gate-monitor/components/PpeChecklist";

interface Props {
  scanStatus: ScanStatus;
  activeWorker: Worker | null;
  activeZone: Zone | null;
  zones: Zone[];
  isPpeItemMissing: (item: PpeType) => boolean;
}

export function ScanResultCard({ scanStatus, activeWorker, activeZone, zones, isPpeItemMissing }: Props) {
  return (
    <Card className="shadow-none border flex-1">
      <CardHeader className="border-b py-3 px-4">
        <CardTitle className="text-sm font-semibold">{GATE_TEXT.resultTitle}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex flex-col gap-4">
        <GateStatus status={scanStatus} />

        <div className={`flex items-center justify-between p-3 rounded-lg border text-sm font-medium transition-all ${
          scanStatus === "granted"
            ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400"
            : "bg-muted/30 text-muted-foreground border-border"
        }`}>
          <span className="flex items-center gap-2">
            {scanStatus === "granted" ? <UnlockIcon className="h-4 w-4" /> : <LockIcon className="h-4 w-4" />}
            {GATE_TEXT.gateStatus}
          </span>
          <Badge variant={scanStatus === "granted" ? "default" : "outline"} className={scanStatus === "granted" ? "bg-green-600 text-white" : ""}>
            {scanStatus === "granted" ? GATE_TEXT.gateOpen : GATE_TEXT.gateLocked}
          </Badge>
        </div>

        {activeWorker && <WorkerCard worker={activeWorker} zones={zones} />}

        {activeZone && (
          <PpeChecklist zone={activeZone} scanStatus={scanStatus} isPpeItemMissing={isPpeItemMissing} />
        )}
      </CardContent>
    </Card>
  );
}
