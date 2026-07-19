"use client";

import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { StatusIndicator } from "@/components/ui/indicator";
import { EllipsisIcon, SendIcon, CheckSquareIcon } from "lucide-react";
import { DUMMY_OFFICERS } from "@/features/dashboard/data/awas-dashboard";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export function TeamOnDuty({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card className={cn("shadow-none dark:ring-0", className)} {...props}>
      <CardHeader className="border-b">
        <CardTitle>Petugas K3 Bertugas</CardTitle>
        <CardDescription>Supervisor & Safety Officer shift ini.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="flex flex-col divide-y divide-border">
          {DUMMY_OFFICERS.map((t) => (
            <li
              className="flex items-center gap-2 p-3 first:pt-0 last:pb-0 sm:gap-3"
              key={t.id}
            >
              <Avatar className="size-8">
                <AvatarImage alt={t.name} src={t.image} />
                <AvatarFallback>{getInitials(t.name)}</AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1 pr-1">
                <p className="truncate font-medium text-foreground text-sm leading-snug">
                  {t.name}
                </p>
                <p className="flex items-center gap-2 text-[10px] leading-snug text-muted-foreground">
                  <span className="flex shrink-0 items-center gap-1 font-semibold">
                    <StatusIndicator
                      color={t.status === "Online" ? "emerald" : "amber"}
                      pulse={t.status === "Online"}
                    />
                    {t.status}
                  </span>
                  <span className="inline-flex size-1 rounded-full bg-foreground/30" />
                  <span className="truncate">{t.role}</span>
                  <span className="inline-flex size-1 rounded-full bg-foreground/30" />
                  <span className="tabular-nums font-semibold">{t.assignedViolations} kasus</span>
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    aria-label={`Actions for ${t.name}`}
                    size="icon-xs"
                    variant="ghost"
                  >
                    <EllipsisIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="min-w-52">
                  <DropdownMenuLabel className="font-normal text-muted-foreground text-xs">
                    {t.name}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2">
                    <SendIcon className="size-4 opacity-70" />
                    Kirim Pesan (HT)
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2">
                    <CheckSquareIcon className="size-4 opacity-70" />
                    Tugaskan Investigasi
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
