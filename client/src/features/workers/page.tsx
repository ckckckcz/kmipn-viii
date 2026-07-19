"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { zoneService } from "@/services/zone.service";
import { workerService } from "@/services/worker.service";
import type { Worker, Zone } from "@/types";
import { useWorkerSearch } from "@/features/workers/hooks/useWorkerSearch";
import { WorkerHeader } from "@/features/workers/components/WorkerHeader";
import { WorkerSearch } from "@/features/workers/components/WorkerSearch";
import { WorkerTable } from "@/features/workers/components/WorkerTable";

export default function WorkersPage() {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([workerService.getAll(), zoneService.getAll()])
      .then(([w, z]) => { setWorkers(w); setZones(z); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const { searchQuery, setSearchQuery, filteredWorkers } = useWorkerSearch(workers);

  if (loading) return <AppShell><div className="flex justify-center py-20 text-muted-foreground text-sm">Memuat data pekerja...</div></AppShell>;
  if (error) return <AppShell><div className="flex justify-center py-20 text-red-500 text-sm">Error: {error}</div></AppShell>;

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <WorkerHeader />
        <div className="flex items-center gap-3">
          <WorkerSearch value={searchQuery} onChange={setSearchQuery} />
        </div>
        <WorkerTable workers={filteredWorkers} zones={zones} />
      </div>
    </AppShell>
  );
}
