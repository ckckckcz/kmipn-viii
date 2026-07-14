import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Delta, DeltaIcon, DeltaValue } from "@/components/ui/delta";
import { getDashboardSummary } from "@/lib/dummy-data/awas-dashboard";

export function DashboardStats() {
  const summary = getDashboardSummary();
  const statsList = [
    {
      label: "Compliance Score",
      value: summary.complianceScore.value,
      delta: summary.complianceScore.delta,
      footnote: summary.complianceScore.footnote,
      lowerIsBetter: summary.complianceScore.lowerIsBetter,
    },
    {
      label: "Total Akses Hari Ini",
      value: summary.totalAccess.value,
      delta: summary.totalAccess.delta,
      footnote: summary.totalAccess.footnote,
      lowerIsBetter: summary.totalAccess.lowerIsBetter,
    },
    {
      label: "Total Pelanggaran Hari Ini",
      value: summary.totalViolations.value,
      delta: summary.totalViolations.delta,
      footnote: summary.totalViolations.footnote,
      lowerIsBetter: summary.totalViolations.lowerIsBetter,
    },
    {
      label: "Zona Aktif",
      value: summary.activeZones.value,
      delta: summary.activeZones.delta,
      footnote: summary.activeZones.footnote,
      lowerIsBetter: summary.activeZones.lowerIsBetter,
    },
  ];

  return (
    <>
      {statsList.map((s) => (
        <Card className={cn("shadow-none dark:ring-0")} key={s.label}>
          <CardHeader>
            <CardTitle className="font-normal text-muted-foreground text-xs">
              {s.label}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <p className="font-semibold text-2xl tabular-nums">{s.value}</p>
            <div className="flex items-center gap-1 text-xs">
              <Delta value={s.delta}>
                <DeltaIcon />
                <DeltaValue />
              </Delta>
              <span className="text-muted-foreground">{s.footnote}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
