import { RefreshCwIcon, Check, X } from "lucide-react";
import { PPE_LABELS, PpeType } from "@/types";
import { ScanStatus } from "@/features/gate-monitor/types/gate";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";

interface Props {
  ppe: PpeType;
  isMissing: boolean;
  scanStatus: ScanStatus;
}

export function PpeChecklistItem({ ppe, isMissing, scanStatus }: Props) {
  const isIdle = scanStatus === "idle";
  const isProcessing = scanStatus === "processing";

  return (
    <div className={`flex items-center justify-between p-2.5 rounded-lg border text-xs transition-all duration-200 ${
      isIdle ? "bg-muted/10 border-muted text-muted-foreground"
        : isProcessing ? "bg-muted/30 border-muted/50 text-muted-foreground animate-pulse"
        : isMissing
        ? "bg-red-50/50 dark:bg-red-950/10 border-red-200/60 dark:border-red-900/30 text-red-700 dark:text-red-400 shadow-sm"
        : "bg-green-50/50 dark:bg-green-950/10 border-green-200/60 dark:border-green-900/30 text-green-700 dark:text-green-400 shadow-sm"
    }`}>
      <span className="font-medium">{PPE_LABELS[ppe]}</span>
      <div className="flex items-center gap-1.5 font-semibold text-[10px] uppercase tracking-wider">
        {isIdle ? (
          <span className="text-muted-foreground">{GATE_TEXT.waiting}</span>
        ) : isProcessing ? (
          <span className="text-blue-500 animate-pulse flex items-center gap-1">
            <RefreshCwIcon className="h-2.5 w-2.5 animate-spin" />
            {GATE_TEXT.detecting}
          </span>
        ) : isMissing ? (
          <span className="flex items-center gap-1 text-red-600 dark:text-red-400">
            <span>{GATE_TEXT.notFound}</span>
            <X className="h-3 w-3 stroke-[3]" />
          </span>
        ) : (
          <span className="flex items-center gap-1 text-green-600 dark:text-green-400">
            <span>{GATE_TEXT.completeLabel}</span>
            <Check className="h-3 w-3 stroke-[3]" />
          </span>
        )}
      </div>
    </div>
  );
}
