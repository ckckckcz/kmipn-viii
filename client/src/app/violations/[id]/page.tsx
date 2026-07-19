"use client";

import { useParams } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useAwas } from "@/providers/AwasProvider";
import { PPE_LABELS } from "@/types";
import { ViolationStatusBadge } from "@/features/violations/components/ViolationStatusBadge";
import { formatTimeAgo } from "@/features/violations/utils/time";

export default function ViolationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { violations, workers, zones } = useAwas();

  const violation = violations.find((v) => v.id === id);
  const worker = violation ? workers.find((w) => w.id === violation.workerId) : undefined;
  const zone = violation ? zones.find((z) => z.id === violation.zoneId) : undefined;

  if (!violation) {
    return (
      <AppShell>
        <div className="flex flex-col items-center justify-center gap-4 py-20">
          <span className="text-muted-foreground">Pelanggaran tidak ditemukan.</span>
          <Button asChild variant="outline" size="sm"><Link href="/violations">Kembali</Link></Button>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="flex flex-col gap-6 max-w-3xl">
        <div className="flex items-center gap-4">
          <Button asChild variant="ghost" size="icon-sm" className="h-8 w-8">
            <Link href="/violations"><ArrowLeft className="h-4 w-4" /></Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Detail Pelanggaran</h1>
            <p className="text-muted-foreground text-sm">ID: {violation.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="shadow-none border">
            <CardHeader className="py-3 px-4 border-b">
              <CardTitle className="text-sm font-semibold">Informasi Pekerja</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-3">
              {worker && (
                <div className="flex items-center gap-3">
                  <img src={worker.photoUrl} alt={worker.name} className="w-14 h-14 rounded-lg object-cover border" />
                  <div>
                    <h3 className="font-semibold">{worker.name}</h3>
                    <p className="text-xs text-muted-foreground">{worker.idCardNumber}</p>
                  </div>
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Zona:</span> {zone?.name || "Unknown"}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-none border">
            <CardHeader className="py-3 px-4 border-b">
              <CardTitle className="text-sm font-semibold">Status & Waktu</CardTitle>
            </CardHeader>
            <CardContent className="p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Status</span>
                <ViolationStatusBadge status={violation.followUpStatus} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Waktu</span>
                <span className="text-xs font-medium">{formatTimeAgo(violation.timestamp)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Confidence</span>
                <Badge variant="outline" className="text-xs">{violation.confidenceScore}%</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-none border">
          <CardHeader className="py-3 px-4 border-b">
            <CardTitle className="text-sm font-semibold">APD yang Tidak Terdeteksi</CardTitle>
          </CardHeader>
          <CardContent className="p-4 flex flex-wrap gap-2">
            {violation.missingPpe.map((item) => (
              <Badge key={item} variant="destructive" className="text-xs px-2 py-1">{PPE_LABELS[item]}</Badge>
            ))}
          </CardContent>
        </Card>

        {violation.supervisorNote && (
          <Card className="shadow-none border">
            <CardHeader className="py-3 px-4 border-b">
              <CardTitle className="text-sm font-semibold">Catatan Supervisor</CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-sm text-muted-foreground">{violation.supervisorNote}</CardContent>
          </Card>
        )}

        <Card className="shadow-none border overflow-hidden">
          <CardHeader className="py-3 px-4 border-b">
            <CardTitle className="text-sm font-semibold">Bukti Screenshot</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <img src={violation.screenshotUrl} alt="Screenshot" className="w-full object-cover" />
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}
