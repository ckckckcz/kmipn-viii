import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Violation, Worker, Zone } from "@/types";
import { TABLE_HEADERS } from "@/features/violations/constants/violation-status";
import { ViolationRow } from "@/features/violations/components/ViolationRow";
import { EmptyState } from "@/features/violations/components/EmptyState";
import { TablePagination } from "@/features/violations/components/TablePagination";

interface Props {
  violations: Violation[];
  workers: Worker[];
  zones: Zone[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

export function ViolationTable({ violations, workers, zones, currentPage, totalPages, totalItems, onPageChange }: Props) {
  return (
    <Card className="shadow-none border overflow-hidden">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {TABLE_HEADERS.map((h, i) => (
                <TableHead key={h} className={i === 0 ? "pl-6 w-1/4" : i === TABLE_HEADERS.length - 1 ? "pr-6 text-right w-24" : i >= 3 ? "text-center w-32" : "w-1/4"}>
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {violations.length === 0 ? (
              <EmptyState />
            ) : (
              violations.map((v) => (
                <ViolationRow
                  key={v.id}
                  violation={v}
                  worker={workers.find((w) => w.id === v.workerId)}
                  zone={zones.find((z) => z.id === v.zoneId)}
                />
              ))
            )}
          </TableBody>
        </Table>
        <TablePagination currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} onPageChange={onPageChange} />
      </CardContent>
    </Card>
  );
}
