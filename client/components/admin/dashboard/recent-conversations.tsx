"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowRightIcon } from "lucide-react";
import { DUMMY_VIOLATIONS, type Violation } from "@/lib/dummy-data/awas-dashboard";

function formatTimeAgo(timestampStr: string): string {
  const diff = Date.now() - new Date(timestampStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return "Baru saja";
  if (minutes < 60) return `${minutes}m lalu`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}j lalu`;
  const days = Math.floor(hours / 24);
  return `${days}d lalu`;
}

function statusVariant(
  state: Violation["followUpStatus"],
): ComponentProps<typeof Badge>["variant"] {
  if (state === "new") {
    return "destructive";
  }
  if (state === "in_progress") {
    return "default";
  }
  return "secondary";
}

function statusLabel(state: Violation["followUpStatus"]): string {
  if (state === "new") {
    return "Baru";
  }
  if (state === "in_progress") {
    return "Diproses";
  }
  return "Selesai";
}

export function RecentConversations({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn("gap-0 shadow-none md:col-span-2 dark:ring-0", className)}
      {...props}
    >
      <CardHeader className="border-b">
        <CardTitle>Pelanggaran Terbaru</CardTitle>
        <CardDescription>Daftar insiden pelanggaran APD terdeteksi kamera.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead className="pl-6">Pekerja</TableHead>
              <TableHead className="hidden sm:table-cell">Zona</TableHead>
              <TableHead>APD Kurang</TableHead>
              <TableHead className="text-right">Waktu</TableHead>
              <TableHead className="pr-6 text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {DUMMY_VIOLATIONS.slice(0, 4).map((r) => {
              return (
                <TableRow
                  className="h-14 hover:bg-transparent"
                  key={r.id}
                >
                  <TableCell className="max-w-44 truncate pl-6 font-medium flex items-center gap-3">
                    <img
                      src={r.screenshotUrl}
                      alt={r.workerName}
                      className="size-9 rounded-md object-cover border border-border shrink-0"
                    />
                    <span className="truncate">{r.workerName}</span>
                  </TableCell>
                  <TableCell className="hidden max-w-36 sm:table-cell text-muted-foreground text-sm truncate">
                    {r.zoneName.split(" - ")[0]}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {r.missingPpe.map((ppe) => (
                        <span
                          key={ppe}
                          className="px-1.5 py-0.5 rounded bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400 text-[10px] font-semibold border border-red-100 dark:border-red-900/50"
                        >
                          {ppe}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground text-sm whitespace-nowrap">
                    {formatTimeAgo(r.timestamp)}
                  </TableCell>
                  <TableCell className="pr-6 text-right">
                    <Badge variant={statusVariant(r.followUpStatus)}>
                      {statusLabel(r.followUpStatus)}
                    </Badge>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className="flex justify-center border-t py-3">
          <Button asChild size="sm" variant="ghost">
            <a href="#/violations">
              Lihat Semua Pelanggaran
              <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
