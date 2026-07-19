"use client";

import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from "recharts";
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
import { Delta, DeltaIcon, DeltaValue } from "@/components/ui/delta";
import { DUMMY_RESOLUTION_TIME_TREND } from "@/features/dashboard/data/awas-dashboard";

const firstHours = DUMMY_RESOLUTION_TIME_TREND[0]?.hours ?? 0;
const lastHours = DUMMY_RESOLUTION_TIME_TREND.at(-1)?.hours ?? firstHours;

// Positive delta because lower resolution time is better (decrease is positive improvement!)
const improvementPct =
  firstHours > 0 ? ((firstHours - lastHours) / firstHours) * 100 : 0;

const chartConfig = {
  hours: {
    label: "Jam",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function FirstReplyTimeChart({
  className,
  ...props
}: ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn("shadow-none md:col-span-2 dark:ring-0", className)}
      {...props}
    >
      <CardHeader className="space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <CardTitle>Rata-rata Waktu Tindak Lanjut</CardTitle>
          <Delta value={improvementPct} variant="badge">
            <DeltaIcon variant="trend" />
            <DeltaValue />
          </Delta>
        </div>
        <CardDescription>
          Rata-rata waktu (jam) respon tindak lanjut pelanggaran oleh K3, 7 hari terakhir.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer className="aspect-video w-full" config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={DUMMY_RESOLUTION_TIME_TREND}
            margin={{ top: 24, left: 20, right: 12, bottom: 8 }}
          >
            <CartesianGrid className="stroke-border" vertical={false} />
            <XAxis
              axisLine={false}
              dataKey="day"
              interval={0}
              tickFormatter={(value) => String(value)}
              tickLine={false}
              tickMargin={8}
            />
            <ChartTooltip
              content={<ChartTooltipContent indicator="line" />}
              cursor={false}
            />
            <Line
              activeDot={{ r: 6 }}
              dataKey="hours"
              dot={{ fill: "var(--color-hours)" }}
              stroke="var(--color-hours)"
              strokeWidth={2}
              type="natural"
            >
              <LabelList
                className="fill-foreground"
                dataKey="hours"
                fontSize={12}
                formatter={(label) => {
                  const n = Number(label);
                  return Number.isFinite(n)
                    ? `${n.toFixed(1)}j`
                    : String(label ?? "");
                }}
                offset={12}
                position="top"
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
