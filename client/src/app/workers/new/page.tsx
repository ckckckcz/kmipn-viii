"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { zoneService } from "@/services/zone.service";
import { workerService } from "@/services/worker.service";
import type { Zone } from "@/types";
import { useWorkerForm } from "@/features/workers/hooks/useWorkerForm";
import { WorkerForm } from "@/features/workers";

export default function NewWorkerPage() {
  const router = useRouter();
  const { form, previewUrl, errors, setField, handlePhotoUpload, validate } = useWorkerForm();
  const [zones, setZones] = useState<Zone[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    zoneService.getAll().then(setZones).catch((e: unknown) => setError(e instanceof Error ? e.message : "Unknown error"));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await workerService.create({ name: form.name, idCardNumber: form.idCardNumber, zoneId: form.zoneId, photoUrl: form.photoUrl });
      router.push("/workers");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  };

  return (
    <AppShell>
      {error && <div className="text-xs text-red-500 bg-red-50 dark:bg-red-950/20 p-3 rounded-lg border border-red-200 mb-4">{error}</div>}
      <WorkerForm
        form={form} previewUrl={previewUrl} errors={errors} zones={zones}
        onFieldChange={setField} onPhotoUpload={handlePhotoUpload} onSubmit={handleSave}
      />
    </AppShell>
  );
}
