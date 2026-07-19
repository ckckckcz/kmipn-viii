"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { zoneService } from "@/services/zone.service";
import { useZoneForm } from "@/features/zones/hooks/useZoneForm";
import { ZoneFormHeader } from "@/features/zones/components/ZoneFormHeader";
import { ZoneForm } from "@/features/zones/components/ZoneForm";

export function NewZonePage() {
  const router = useRouter();
  const { form, setField, handlePpeToggle, isValid } = useZoneForm();
  const [error, setError] = useState<string | null>(null);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    try {
      await zoneService.create({ name: form.name, description: form.description, riskLevel: form.riskLevel, requiredPpe: form.requiredPpe });
      router.push("/zones");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <ZoneFormHeader />
        {error && <div className="text-xs text-red-500 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200">{error}</div>}
        <ZoneForm
          name={form.name}
          description={form.description}
          riskLevel={form.riskLevel}
          requiredPpe={form.requiredPpe}
          onNameChange={(val) => setField("name", val)}
          onDescriptionChange={(val) => setField("description", val)}
          onRiskLevelChange={(val) => setField("riskLevel", val)}
          onPpeToggle={handlePpeToggle}
          onSubmit={handleSave}
        />
      </div>
    </AppShell>
  );
}
