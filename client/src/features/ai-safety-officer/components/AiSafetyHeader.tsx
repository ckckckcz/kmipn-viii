import { RoadmapBadge } from "@/features/ai-safety-officer/components/RoadmapBadge";

export function AiSafetyHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">AI Safety Officer</h1>
        <p className="text-muted-foreground text-sm">Konsultan K3 berbasis LLM cerdas yang menganalisis log kepatuhan APD.</p>
      </div>
      <RoadmapBadge />
    </div>
  );
}
