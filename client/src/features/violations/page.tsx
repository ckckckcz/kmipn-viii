"use client";

import { useState, useEffect } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { violationService } from "@/services/violation.service";
import { workerService } from "@/services/worker.service";
import { zoneService } from "@/services/zone.service";
import type { Violation, Worker, Zone } from "@/types";
import { useViolationFilters } from "@/features/violations/hooks/useViolationFilters";
import { useFilteredViolations } from "@/features/violations/hooks/useFilteredViolations";
import { usePagination } from "@/features/violations/hooks/usePagination";
import { ViolationFilter } from "@/features/violations/components/ViolationFilter";
import { ViolationTable } from "@/features/violations/components/ViolationTable";

export default function ViolationsPage() {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [zones, setZones] = useState<Zone[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([violationService.getAll(), workerService.getAll(), zoneService.getAll()])
      .then(([v, w, z]) => { setViolations(v); setWorkers(w); setZones(z); })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const {
    rawSearchName, setRawSearchName,
    selectedZoneId, setSelectedZoneId,
    selectedPpe, setSelectedPpe,
    selectedStatus, setSelectedStatus,
    currentPage, setCurrentPage,
    resetFilters,
  } = useViolationFilters();

  const filteredViolations = useFilteredViolations(violations, workers, zones, {
    searchName: rawSearchName, selectedZoneId, selectedPpe, selectedStatus,
  });

  const { totalPages, paginatedItems, ITEMS_PER_PAGE } = usePagination(filteredViolations, currentPage);

  if (loading) return <AppShell><div className="flex justify-center py-20 text-muted-foreground text-sm">Memuat data pelanggaran...</div></AppShell>;
  if (error) return <AppShell><div className="flex justify-center py-20 text-red-500 text-sm">Error: {error}</div></AppShell>;

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Log Pelanggaran APD</h1>
          <p className="text-muted-foreground text-sm">Daftar riwayat dan audit trail pelanggaran standar K3 di seluruh area.</p>
        </div>

        <ViolationFilter
          searchName={rawSearchName}
          selectedZoneId={selectedZoneId}
          selectedPpe={selectedPpe}
          selectedStatus={selectedStatus}
          zones={zones}
          onSearchChange={(val) => { setRawSearchName(val); setCurrentPage(1); }}
          onZoneChange={setSelectedZoneId}
          onPpeChange={setSelectedPpe}
          onStatusChange={setSelectedStatus}
          onReset={resetFilters}
        />

        <ViolationTable
          violations={paginatedItems} workers={workers} zones={zones}
          currentPage={currentPage} totalPages={totalPages}
          totalItems={filteredViolations.length} onPageChange={setCurrentPage}
        />
      </div>
    </AppShell>
  );
}
