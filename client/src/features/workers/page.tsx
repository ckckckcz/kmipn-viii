"use client";

import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { useWorkerSearch } from "@/features/workers/hooks/useWorkerSearch";
import { WorkerHeader } from "@/features/workers/components/WorkerHeader";
import { WorkerSearch } from "@/features/workers/components/WorkerSearch";
import { WorkerTable } from "@/features/workers/components/WorkerTable";

export default function WorkersPage() {
  const { workers, zones } = useAwas();
  const { searchQuery, setSearchQuery, filteredWorkers } = useWorkerSearch(workers);

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
