import { RefreshCwIcon, ShieldCheckIcon, ShieldAlertIcon, Check, X } from "lucide-react";
import { ScanStatus } from "@/features/gate-monitor/types/gate";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";

interface Props {
  status: ScanStatus;
}

export function GateStatus({ status }: Props) {
  return (
    <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-muted/20 min-h-[140px] text-center">
      {status === "idle" && (
        <div className="flex flex-col items-center gap-2">
          <RefreshCwIcon className="h-10 w-10 text-muted-foreground/60 animate-pulse" />
          <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{GATE_TEXT.awaitingScan}</span>
          <span className="text-xs text-muted-foreground">{GATE_TEXT.awaitingScanDesc}</span>
        </div>
      )}

      {status === "processing" && (
        <div className="flex flex-col items-center gap-2">
          <RefreshCwIcon className="h-10 w-10 text-blue-500 animate-spin" />
          <span className="text-sm font-bold text-blue-500 uppercase tracking-wider">{GATE_TEXT.processing}</span>
          <span className="text-xs text-muted-foreground">{GATE_TEXT.processingDesc}</span>
        </div>
      )}

      {status === "granted" && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center border border-green-200 shadow-[0_0_15px_rgba(34,197,94,0.15)] animate-pulse">
            <ShieldCheckIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <span className="flex items-center gap-1.5 text-lg font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">
            {GATE_TEXT.complete}
            <Check className="h-5 w-5 text-green-600 dark:text-green-400 stroke-[3]" />
          </span>
          <span className="text-xs text-muted-foreground">{GATE_TEXT.accessGranted}</span>
        </div>
      )}

      {status === "denied" && (
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-950/40 flex items-center justify-center border border-red-200 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <ShieldAlertIcon className="h-6 w-6 text-red-600 dark:text-red-400" />
          </div>
          <span className="flex items-center gap-1.5 text-lg font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
            {GATE_TEXT.incomplete}
            <X className="h-5 w-5 text-red-600 dark:text-red-400 stroke-[3]" />
          </span>
          <span className="text-xs text-muted-foreground">{GATE_TEXT.accessDenied}</span>
        </div>
      )}
    </div>
  );
}
