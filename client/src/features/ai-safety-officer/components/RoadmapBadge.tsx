import { Badge } from "@/components/ui/badge";
import { Construction } from "lucide-react";

export function RoadmapBadge() {
  return (
    <Badge variant="secondary" className="flex items-center gap-1 bg-amber-50 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50 font-semibold uppercase text-[10px] tracking-wider px-2.5 py-1 self-start md:self-center">
      <Construction className="h-3.5 w-3.5 text-amber-500 animate-bounce" />
      Fitur Roadmap Fase Berikutnya
    </Badge>
  );
}
