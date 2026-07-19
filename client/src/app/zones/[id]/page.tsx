"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { zoneService } from "@/services/zone.service";
import type { Zone } from "@/types";
import { RiskBadge } from "@/features/zones/components/RiskBadge";
import { ZoneStats } from "@/features/zones/components/ZoneStats";
import { RequiredPpeList } from "@/features/zones/components/RequiredPpeList";
import { ZONE_TEXT } from "@/features/zones/constants/defaults";

export default function ZoneDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [zone, setZone] = useState<Zone | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    zoneService.getById(id)
      .then(setZone)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <AppShell><div className="flex justify-center py-20 text-muted-foreground text-sm">Memuat...</div></AppShell>;
  if (error || !zone) return (
    <AppShell>
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <span className="text-muted-foreground">{ZONE_TEXT.notFound}</span>
        <Button asChild variant="outline" size="sm"><Link href="/zones">{ZONE_TEXT.back}</Link></Button>
      </div>
    </AppShell>
  );

  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon-sm" className="h-8 w-8">
            <Link href="/zones"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{ZONE_TEXT.detailTitle}</h1>
            <p className="text-muted-foreground text-sm">ID: {zone.id}</p>
          </div>
        </div>

        <Card className="shadow-none border">
          <CardHeader className="py-4 px-5 border-b flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base font-bold">{zone.name}</CardTitle>
              <p className="text-xs text-muted-foreground mt-0.5">{zone.description}</p>
            </div>
            <RiskBadge level={zone.riskLevel} />
          </CardHeader>
          <CardContent className="p-5 flex flex-col gap-4">
            <ZoneStats complianceScore={zone.complianceScore} gateCount={zone.gateCount} />
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{ZONE_TEXT.ppeLabel}</span>
              <RequiredPpeList items={zone.requiredPpe} />
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
