import { BrainIcon } from "lucide-react";

export function ComingSoonOverlay() {
  return (
    <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] flex flex-col items-center justify-center text-center p-4">
      <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 mb-2 border">
        <BrainIcon className="h-5 w-5" />
      </div>
      <span className="text-xs font-bold text-foreground">Fitur Obrolan Segera Hadir</span>
      <span className="text-[10px] text-muted-foreground max-w-[200px] mt-1">Sistem integrasi model LLM (Gemini) pada roadmap fase 2.</span>
    </div>
  );
}
