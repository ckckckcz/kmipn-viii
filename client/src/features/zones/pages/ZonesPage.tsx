"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { zoneService } from "@/services/zone.service";
import type { Zone } from "@/types";
import { ZoneHeader } from "@/features/zones/components/ZoneHeader";
import { ZoneCard } from "@/features/zones/components/ZoneCard";

export function ZonesPage() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    zoneService.getAll()
      .then(setZones)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <AppShell><div className="flex justify-center py-20 text-muted-foreground text-sm">Memuat data zona...</div></AppShell>;
  if (error) return <AppShell><div className="flex justify-center py-20 text-red-500 text-sm">Error: {error}</div></AppShell>;

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <ZoneHeader />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {zones.map((zone) => <ZoneCard key={zone.id} zone={zone} />)}
        </div>
      </div>
    </AppShell>
  );
}
