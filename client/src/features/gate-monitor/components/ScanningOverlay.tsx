import { RefreshCwIcon } from "lucide-react";
import { GATE_TEXT } from "@/features/gate-monitor/constants/gate-text";

export function ScanningOverlay() {
  return (
    <div className="absolute inset-0 bg-blue-500/10 flex flex-col items-center justify-center">
      <div className="absolute inset-x-0 h-1 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-pulse" style={{ animation: "scanLine 2s infinite ease-in-out", top: "20%" }} />
      <style>{`
        @keyframes scanLine { 0% { top: 10%; } 50% { top: 90%; } 100% { top: 10%; } }
      `}</style>
      <div className="bg-neutral-900/90 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30 flex items-center gap-2 backdrop-blur-sm">
        <RefreshCwIcon className="h-4 w-4 animate-spin" />
        <span className="text-xs font-semibold tracking-wider uppercase">{GATE_TEXT.analyzing}</span>
      </div>
    </div>
  );
}
