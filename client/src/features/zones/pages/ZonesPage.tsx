"use client";

import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { ZoneHeader } from "@/features/zones/components/ZoneHeader";
import { ZoneCard } from "@/features/zones/components/ZoneCard";

export function ZonesPage() {
  const { zones } = useAwas();

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
