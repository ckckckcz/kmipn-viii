"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { workerService } from "@/services/worker.service";
import { zoneService } from "@/services/zone.service";
import type { Worker, Zone } from "@/types";
import { ComplianceBadge } from "@/features/workers/components/ComplianceBadge";

export default function WorkerDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [worker, setWorker] = useState<Worker | null>(null);
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([workerService.getById(id), zoneService.getAll()])
      .then(([w, z]) => { setWorker(w); setZones(z); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <AppShell><div className="flex justify-center py-20 text-muted-foreground text-sm">Memuat...</div></AppShell>;
  if (error || !worker) return (
    <AppShell>
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <span className="text-muted-foreground">Pekerja tidak ditemukan.</span>
        <Button asChild variant="outline" size="sm"><Link href="/workers">Kembali</Link></Button>
      </div>
    </AppShell>
  );

  const zone = zones.find((z) => z.id === worker.zoneId);

  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon-sm" className="h-8 w-8">
            <Link href="/workers"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Detail Pekerja</h1>
            <p className="text-muted-foreground text-sm">ID: {worker.id}</p>
          </div>
        </div>

        <Card className="shadow-none border">
          <CardContent className="p-6 flex items-center gap-5">
            <img src={worker.photoUrl} alt={worker.name} className="w-20 h-20 rounded-full object-cover border" />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{worker.name}</h2>
              <p className="text-sm text-muted-foreground font-mono">{worker.idCardNumber}</p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs text-muted-foreground">Zona: <span className="font-semibold text-foreground">{zone?.name || "Belum Ditugaskan"}</span></span>
                <ComplianceBadge rate={worker.complianceRate} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
