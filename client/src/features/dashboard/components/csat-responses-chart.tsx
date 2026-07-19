"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { Bar, BarChart, Cell, Rectangle, XAxis, YAxis } from "recharts";
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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { DUMMY_ZONES } from "@/features/dashboard/data/awas-dashboard";

const chartData = DUMMY_ZONES.map((zone) => {
  let color = "var(--chart-1)";
  if (zone.complianceScore >= 90) {
    color = "rgb(16, 185, 129)"; // emerald-500
  } else if (zone.complianceScore >= 70) {
    color = "rgb(245, 158, 11)"; // amber-500
  } else {
    color = "rgb(239, 68, 68)"; // red-500
  }
  return {
    name: zone.name.split(" - ")[0], // e.g. "Zona A"
    fullName: zone.name,
    score: zone.complianceScore,
    fill: color,
  };
});

const chartConfig = {
  score: {
    label: "Kepatuhan (%)",
  },
} satisfies ChartConfig;

const BAR_RADIUS = 4;

function ColumnHoverCursor(props: React.ComponentProps<typeof Rectangle>) {
  return (
    <Rectangle
      fill="var(--muted)"
      fillOpacity={0.5}
      radius={BAR_RADIUS * 2}
      stroke="none"
      {...props}
    />
  );
}

export function CsatResponsesChart({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn("shadow-none md:col-span-2 dark:ring-0", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle>Kepatuhan APD per Zona</CardTitle>
        <CardDescription>
          Skor kepatuhan rata-rata per zona kerja aktif. Hijau (≥90%), Kuning (70-89%), Merah (&lt;70%).
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-video w-full" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <XAxis
              axisLine={false}
              dataKey="name"
              interval={0}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis
              axisLine={false}
              domain={[0, 100]}
              tickLine={false}
              tickMargin={10}
              width={30}
            />
            <ChartTooltip
              content={<ChartTooltipContent formatter={(value) => `${value}%`} />}
              cursor={<ColumnHoverCursor />}
            />
            <Bar
              dataKey="score"
              barSize={24}
              radius={[BAR_RADIUS, BAR_RADIUS, 0, 0]}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
