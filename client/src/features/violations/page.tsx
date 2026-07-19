"use client";

import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { useViolationFilters } from "@/features/violations/hooks/useViolationFilters";
import { useFilteredViolations } from "@/features/violations/hooks/useFilteredViolations";
import { usePagination } from "@/features/violations/hooks/usePagination";
import { ViolationFilter } from "@/features/violations/components/ViolationFilter";
import { ViolationTable } from "@/features/violations/components/ViolationTable";

export default function ViolationsPage() {
  const { violations, workers, zones } = useAwas();

  const {
    rawSearchName: searchName, setRawSearchName: setSearchName,
    selectedZoneId, setSelectedZoneId,
    selectedPpe, setSelectedPpe,
    selectedStatus, setSelectedStatus,
    currentPage, setCurrentPage,
    resetFilters,
  } = useViolationFilters();

  const filteredViolations = useFilteredViolations(violations, workers, zones, {
    searchName,
    selectedZoneId,
    selectedPpe,
    selectedStatus,
  });

  const { totalPages, paginatedItems, ITEMS_PER_PAGE } = usePagination(filteredViolations, currentPage);

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Log Pelanggaran APD</h1>
          <p className="text-muted-foreground text-sm">Daftar riwayat dan audit trail pelanggaran standar K3 di seluruh area.</p>
        </div>

        <ViolationFilter
          searchName={searchName}
          selectedZoneId={selectedZoneId}
          selectedPpe={selectedPpe}
          selectedStatus={selectedStatus}
          zones={zones}
          onSearchChange={(val) => { setSearchName(val); setCurrentPage(1); }}
          onZoneChange={setSelectedZoneId}
          onPpeChange={setSelectedPpe}
          onStatusChange={setSelectedStatus}
          onReset={resetFilters}
        />

        <ViolationTable
          violations={paginatedItems}
          workers={workers}
          zones={zones}
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={filteredViolations.length}
          onPageChange={setCurrentPage}
        />
      </div>
    </AppShell>
  );
}
