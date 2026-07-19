"use client";

import { useRouter } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { useAwas } from "@/providers/AwasProvider";
import { useWorkerForm } from "@/features/workers/hooks/useWorkerForm";
import { WorkerForm } from "@/features/workers";

export default function NewWorkerPage() {
  const router = useRouter();
  const { addWorker, zones } = useAwas();
  const { form, previewUrl, errors, setField, handlePhotoUpload, validate } = useWorkerForm();

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    addWorker({ name: form.name, idCardNumber: form.idCardNumber, zoneId: form.zoneId, photoUrl: form.photoUrl });
    router.push("/workers");
  };

  return (
    <AppShell>
      <WorkerForm
        form={form}
        previewUrl={previewUrl}
        errors={errors}
        zones={zones}
        onFieldChange={setField}
        onPhotoUpload={handlePhotoUpload}
        onSubmit={handleSave}
      />
    </AppShell>
  );
}
