import { useState, useCallback } from "react";

export function useViolationFilters() {
  const [searchName, setSearchName] = useState("");
  const [selectedZoneId, setSelectedZoneId] = useState<string>("all");
  const [selectedPpe, setSelectedPpe] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const resetFilters = useCallback(() => {
    setSearchName("");
    setSelectedZoneId("all");
    setSelectedPpe("all");
    setSelectedStatus("all");
    setCurrentPage(1);
  }, []);

  const setFilter = useCallback((setter: (val: string) => void) => (val: string) => {
    setter(val);
    setCurrentPage(1);
  }, []);

  return {
    searchName, setSearchName: setFilter(setSearchName),
    selectedZoneId, setSelectedZoneId: setFilter(setSelectedZoneId),
    selectedPpe, setSelectedPpe: setFilter(setSelectedPpe),
    selectedStatus, setSelectedStatus: setFilter(setSelectedStatus),
    currentPage, setCurrentPage,
    resetFilters,
    rawSearchName: searchName,
    setRawSearchName: setSearchName,
  };
}
