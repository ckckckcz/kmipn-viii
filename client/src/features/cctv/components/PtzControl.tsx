import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import { PtzDir } from "@/features/cctv/types/camera";

interface Props {
  onCommand: (dir: PtzDir) => void;
  disabled?: boolean;
}

const btn = "flex items-center justify-center h-5 w-5 bg-neutral-900 hover:bg-neutral-800 rounded text-neutral-400 border border-neutral-800 hover:text-white";

export function PtzControl({ onCommand, disabled }: Props) {
  return (
    <div className="flex items-center gap-4 bg-neutral-950/80 border border-neutral-800/80 p-2.5 rounded-lg">
      <span className="text-[10px] uppercase font-mono font-bold text-neutral-500 tracking-wider">PTZ Control</span>
      <div className="grid grid-cols-3 gap-1 w-20 h-20 items-center justify-center border border-neutral-800 rounded-md p-1 bg-black/40">
        <div /><button disabled={disabled} onClick={() => onCommand("up")} className={btn}><ChevronUp className="h-3 w-3" /></button><div />
        <button disabled={disabled} onClick={() => onCommand("left")} className={btn}><ChevronLeft className="h-3 w-3" /></button>
        <button disabled={disabled} onClick={() => onCommand("reset")} className={btn}><RotateCcw className="h-3 w-3 text-neutral-500" /></button>
        <button disabled={disabled} onClick={() => onCommand("right")} className={btn}><ChevronRight className="h-3 w-3" /></button>
        <div /><button disabled={disabled} onClick={() => onCommand("down")} className={btn}><ChevronDown className="h-3 w-3" /></button><div />
      </div>
      <div className="flex flex-col gap-1">
        <button disabled={disabled} onClick={() => onCommand("zoomIn")} className="flex items-center justify-center h-6 w-6 bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 text-neutral-400 hover:text-white" title="Zoom In"><ZoomIn className="h-3.5 w-3.5" /></button>
        <button disabled={disabled} onClick={() => onCommand("zoomOut")} className="flex items-center justify-center h-6 w-6 bg-neutral-900 hover:bg-neutral-800 rounded border border-neutral-800 text-neutral-400 hover:text-white" title="Zoom Out"><ZoomOut className="h-3.5 w-3.5" /></button>
      </div>
    </div>
  );
}
