import { useMemo, useCallback } from "react";
import { ITEMS_PER_PAGE } from "@/features/violations/constants/pagination";

export function usePagination<T>(items: T[], currentPage: number) {
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE) || 1;

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return items.slice(start, start + ITEMS_PER_PAGE);
  }, [items, currentPage]);

  const goNext = useCallback(
    () => Math.min(totalPages, currentPage + 1),
    [totalPages, currentPage]
  );

  const goPrev = useCallback(
    () => Math.max(1, currentPage - 1),
    [currentPage]
  );

  return { totalPages, paginatedItems, goNext, goPrev, ITEMS_PER_PAGE };
}
