import { useMemo } from "react";
import { Violation, Worker, Zone, PpeType } from "@/types";

interface Filters {
  searchName: string;
  selectedZoneId: string;
  selectedPpe: string;
  selectedStatus: string;
}

export function useFilteredViolations(violations: Violation[], workers: Worker[], zones: Zone[], filters: Filters) {
  return useMemo(() => {
    return violations.filter((v) => {
      const worker = workers.find((w) => w.id === v.workerId);
      const nameMatch = worker ? worker.name.toLowerCase().includes(filters.searchName.toLowerCase()) : false;
      const zoneMatch = filters.selectedZoneId === "all" || v.zoneId === filters.selectedZoneId;
      const ppeMatch = filters.selectedPpe === "all" || v.missingPpe.includes(filters.selectedPpe as PpeType);
      const statusMatch = filters.selectedStatus === "all" || v.followUpStatus === filters.selectedStatus;
      return nameMatch && zoneMatch && ppeMatch && statusMatch;
    });
  }, [violations, workers, zones, filters.searchName, filters.selectedZoneId, filters.selectedPpe, filters.selectedStatus]);
}
