import { useState, useMemo } from "react";
import { Worker } from "@/types";
import { filterWorkers } from "@/features/workers/utils/filterWorkers";

export function useWorkerSearch(workers: Worker[]) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredWorkers = useMemo(() => filterWorkers(workers, searchQuery), [workers, searchQuery]);

  return { searchQuery, setSearchQuery, filteredWorkers };
}
