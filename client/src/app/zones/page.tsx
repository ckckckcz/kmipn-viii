"use client";

// ponytail: keeps the zone listing clean, uses semantic HTML tables or grids for layout.
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { PPE_LABELS } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PlusIcon, ShieldAlertIcon, ShieldCheckIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

export default function ZonesPage() {
  const { zones } = useAwas();

  const getComplianceColor = (score: number) => {
    if (score >= 90) return "text-green-600 dark:text-green-400 border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/20";
    if (score >= 80) return "text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20";
    return "text-red-600 dark:text-red-400 border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20";
  };

  const getRiskBadge = (level: "low" | "medium" | "high") => {
    switch (level) {
      case "low":
        return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-950/30 dark:text-green-400 border border-green-200 dark:border-green-900/50">Risiko Rendah</Badge>;
      case "medium":
        return <Badge variant="secondary" className="bg-amber-100 text-amber-800 dark:bg-amber-950/30 dark:text-amber-400 border border-amber-200 dark:border-amber-900/50">Risiko Sedang</Badge>;
      case "high":
        return <Badge variant="destructive" className="bg-red-100 text-red-800 dark:bg-red-950/30 dark:text-red-400 border border-red-200 dark:border-red-900/50">Risiko Tinggi</Badge>;
    }
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Manajemen Zona Kerja</h1>
            <p className="text-muted-foreground text-sm">Kelola area kerja dan atur konfigurasi APD wajib per masing-masing zona.</p>
          </div>
          <Button asChild className="bg-primary text-white gap-1.5 h-9 shrink-0 self-start md:self-center">
            <Link href="/zones/new">
              <PlusIcon className="h-4 w-4" />
              Tambah Zona
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {zones.map((zone) => (
            <Card key={zone.id} className="shadow-none border flex flex-col justify-between">
              <CardHeader className="pb-3 border-b">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex gap-2.5 items-start">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border shrink-0">
                      <MapPinIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold">{zone.name}</CardTitle>
                      <CardDescription className="text-xs mt-0.5 line-clamp-2">{zone.description}</CardDescription>
                    </div>
                  </div>
                  {getRiskBadge(zone.riskLevel)}
                </div>
              </CardHeader>
              <CardContent className="py-4 flex flex-col gap-4 flex-1">
                {/* Stats Panel */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col p-2.5 border rounded-lg bg-muted/10">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Compliance Score</span>
                    <span className={`text-xl font-extrabold mt-1.5 flex items-center gap-1.5`}>
                      {zone.complianceScore}%
                      {zone.complianceScore >= 90 ? (
                        <ShieldCheckIcon className="h-4.5 w-4.5 text-green-600" />
                      ) : (
                        <ShieldAlertIcon className="h-4.5 w-4.5 text-amber-600" />
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col p-2.5 border rounded-lg bg-muted/10">
                    <span className="text-[10px] font-bold text-muted-foreground uppercase">Jumlah Gerbang</span>
                    <span className="text-xl font-extrabold mt-1.5">{zone.gateCount} Gate</span>
                  </div>
                </div>

                {/* Required PPE */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Persyaratan APD Wajib</span>
                  <div className="flex flex-wrap gap-1.5">
                    {zone.requiredPpe.map((ppe) => (
                      <span
                        key={ppe}
                        className="px-2 py-0.5 rounded-full bg-primary/5 text-primary text-[10px] font-semibold border border-primary/20"
                      >
                        {PPE_LABELS[ppe]}
                      </span>
                    ))}
                    {zone.requiredPpe.length === 0 && (
                      <span className="text-xs text-muted-foreground italic">Tidak ada APD wajib dikonfigurasi</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-3 pb-4 border-t flex justify-end">
                <Button asChild size="sm" variant="outline" className="h-8">
                  <Link href={`/zones/${zone.id}`}>
                    Kelola Zona
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
