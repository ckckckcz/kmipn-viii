import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Worker, Zone } from "@/types";
import { WORKER_TEXT } from "@/features/workers/constants/defaults";
import { WorkerRow } from "@/features/workers/components/WorkerRow";

interface Props {
  workers: Worker[];
  zones: Zone[];
}

export function WorkerTable({ workers, zones }: Props) {
  return (
    <Card className="shadow-none border overflow-hidden">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              {WORKER_TEXT.tableCols.map((col, i) => (
                <TableHead key={col} className={i === 0 ? "pl-6 w-1/3" : i === WORKER_TEXT.tableCols.length - 1 ? "pr-6 text-right w-24" : i >= 3 ? "text-center w-36" : "w-1/4"}>
                  {col}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {workers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10 text-xs text-muted-foreground">{WORKER_TEXT.emptySearch}</td>
              </tr>
            ) : (
              workers.map((w) => <WorkerRow key={w.id} worker={w} zone={zones.find((z) => z.id === w.zoneId)} />)
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
