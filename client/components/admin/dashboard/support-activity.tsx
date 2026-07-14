"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShieldCheckIcon,
  ShieldAlertIcon,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";
import { DUMMY_ACCESS_LOGS } from "@/lib/dummy-data/awas-dashboard";

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

export function SupportActivity({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card className={cn("gap-0 shadow-none dark:ring-0", className)} {...props}>
      <CardHeader className="border-b">
        <CardTitle>Aktivitas Gerbang</CardTitle>
        <CardDescription>Log deteksi dan akses masuk area kerja.</CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <ul className="flex flex-col divide-y divide-border">
          {DUMMY_ACCESS_LOGS.slice(0, 5).map((log) => (
            <li className="flex h-18 items-center gap-3 px-3 animate-fade-in" key={log.id}>
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full border [&_svg]:size-5",
                  log.status === "granted"
                    ? "bg-emerald-50 border-emerald-100 text-emerald-600 dark:bg-emerald-950/20 dark:border-emerald-900/30 dark:text-emerald-400"
                    : "bg-red-50 border-red-100 text-red-600 dark:bg-red-950/20 dark:border-red-900/30 dark:text-red-400"
                )}
              >
                {log.status === "granted" ? <ShieldCheckIcon /> : <ShieldAlertIcon />}
              </span>
              <div className="min-w-0 flex-1 space-y-0.5">
                <p className="line-clamp-1 text-sm font-medium text-foreground">
                  {log.status === "granted" ? "Akses Diterima" : "Akses Ditolak"} • <span className="font-semibold text-foreground/80">{log.workerName}</span>
                </p>
                <p className="line-clamp-1 text-muted-foreground text-xs">
                  {log.zoneName.split(" - ")[0]}
                  {log.status === "denied" && ` • Kurang: ${log.missingPpe.join(", ")}`}
                </p>
              </div>
              <span className="text-muted-foreground text-xs tabular-nums whitespace-nowrap self-center pr-2">
                {formatTimeAgo(log.timestamp)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="flex items-center justify-center py-2 border-t">
        <Button asChild size="sm" variant="ghost">
          <Link href="#/gate-logs">
            Lihat Semua Aktivitas
            <ArrowRightIcon aria-hidden="true" data-icon="inline-end" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
