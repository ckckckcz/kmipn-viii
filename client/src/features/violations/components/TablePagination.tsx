import { Button } from "@/components/ui/button";
import { ITEMS_PER_PAGE, PAGINATION_TEXT } from "@/features/violations/constants/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export function TablePagination({ currentPage, totalPages, totalItems, onPageChange }: Props) {
  if (totalItems <= ITEMS_PER_PAGE) return null;

  const start = Math.min(totalItems, (currentPage - 1) * ITEMS_PER_PAGE + 1);
  const end = Math.min(totalItems, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="flex justify-between items-center px-6 py-4 border-t">
      <span className="text-xs text-muted-foreground">
        Menampilkan {start}–{end} dari {totalItems} data
      </span>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="h-8 px-3">
          {PAGINATION_TEXT.prev}
        </Button>
        <Button variant="outline" size="sm" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="h-8 px-3">
          {PAGINATION_TEXT.next}
        </Button>
      </div>
    </div>
  );
}
