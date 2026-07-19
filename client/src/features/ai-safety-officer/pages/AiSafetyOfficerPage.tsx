"use client";

import { AppShell } from "@/components/layout/AppShell";
import { SparklesIcon } from "lucide-react";
import { INSIGHTS } from "@/features/ai-safety-officer/constants/insights";
import { AiSafetyHeader } from "@/features/ai-safety-officer/components/AiSafetyHeader";
import { InsightCard } from "@/features/ai-safety-officer/components/InsightCard";
import { AiChatMockup } from "@/features/ai-safety-officer/components/AiChatMockup";

export function AiSafetyOfficerPage() {
  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <AiSafetyHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
              <SparklesIcon className="h-4 w-4 text-primary" />
              Rekomendasi & Insight K3 Otomatis
            </h3>
            {INSIGHTS.map((ins) => <InsightCard key={ins.id} insight={ins} />)}
          </div>
          <AiChatMockup />
        </div>
      </div>
    </AppShell>
  );
}
