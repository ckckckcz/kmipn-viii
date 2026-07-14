"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { LabelList, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { Delta, DeltaIcon, DeltaValue } from "@/components/ui/delta";
import { DUMMY_APD_BREAKDOWN } from "@/lib/dummy-data/awas-dashboard";

const chartConfig = {
  count: {
    label: "Jumlah Insiden",
  },
  Masker: {
    label: "Masker",
    color: "var(--chart-1)",
  },
  Helm: {
    label: "Helm",
    color: "var(--chart-2)",
  },
  Hairnet: {
    label: "Hairnet",
    color: "var(--chart-3)",
  },
  "Rompi Safety": {
    label: "Rompi Safety",
    color: "var(--chart-4)",
  },
  "Kacamata Safety": {
    label: "Kacamata Safety",
    color: "var(--chart-5)",
  },
  Lainnya: {
    label: "Lainnya",
    color: "var(--muted-foreground)",
  },
} satisfies ChartConfig;

export function ChannelBreakdownChart({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn("flex flex-col shadow-none dark:ring-0", className)}
      {...props}
    >
      <CardHeader className="items-center space-y-1 pb-0 sm:items-start">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <CardTitle>Breakdown Jenis APD Kurang</CardTitle>
          <Delta value={-5.8} variant="badge">
            <DeltaIcon variant="trend" />
            <DeltaValue suffix="%" />
          </Delta>
        </div>
        <CardDescription>
          Proporsi jenis APD yang tidak dipakai saat terdeteksi pelanggaran.
        </CardDescription>
      </CardHeader>
      <CardContent className="my-auto">
        <ChartContainer
          className="mx-auto aspect-square max-h-72 w-full"
          config={chartConfig}
        >
          <PieChart accessibilityLayer>
            <Pie
              cornerRadius={8}
              data={DUMMY_APD_BREAKDOWN}
              dataKey="count"
              innerRadius={36}
              nameKey="ppeType"
              outerRadius="88%"
              stroke="var(--card)"
              strokeWidth={4}
            >
              <LabelList
                className="fill-background font-medium"
                dataKey="count"
                fill="currentColor"
                fontWeight={500}
                formatter={(label) => {
                  const n = Number(label);
                  return Number.isFinite(n) ? `${n}` : String(label ?? "");
                }}
                position="inside"
                stroke="none"
              />
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="ppeType" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
