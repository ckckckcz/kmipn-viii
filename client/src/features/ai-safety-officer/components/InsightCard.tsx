import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Insight } from "@/features/ai-safety-officer/types/insight";
import { INSIGHT_ICON } from "@/features/ai-safety-officer/constants/insight-icon";
import { INSIGHT_ICON_COLOR } from "@/features/ai-safety-officer/constants/insight-color";

interface Props {
  insight: Insight;
}

export function InsightCard({ insight }: Props) {
  const Icon = INSIGHT_ICON[insight.type];
  return (
    <Card className="shadow-none border">
      <CardHeader className="py-3 px-4 border-b flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${INSIGHT_ICON_COLOR[insight.type]}`} />
          <CardTitle className="text-sm font-bold">{insight.title}</CardTitle>
        </div>
        <span className="text-[10px] text-muted-foreground font-mono">{insight.date}</span>
      </CardHeader>
      <CardContent className="p-4 text-xs text-muted-foreground leading-relaxed">
        {insight.description}
      </CardContent>
    </Card>
  );
}
