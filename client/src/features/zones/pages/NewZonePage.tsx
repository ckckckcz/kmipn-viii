"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { useZoneForm } from "@/features/zones/hooks/useZoneForm";
import { ZoneFormHeader } from "@/features/zones/components/ZoneFormHeader";
import { ZoneForm } from "@/features/zones/components/ZoneForm";

export function NewZonePage() {
  const router = useRouter();
  const { addZone } = useAwas();
  const { form, setField, handlePpeToggle, isValid } = useZoneForm();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    addZone({ name: form.name, description: form.description, riskLevel: form.riskLevel, requiredPpe: form.requiredPpe });
    router.push("/zones");
  };

  return (
    <AppShell>
      <div className="flex flex-col gap-6">
        <ZoneFormHeader />
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
