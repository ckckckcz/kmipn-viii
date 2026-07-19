import { useState, useCallback } from "react";
import { WorkerFormData, WorkerFormErrors } from "@/features/workers/types";
import { DEFAULT_PHOTO_URL } from "@/features/workers/constants/defaults";
import { validateWorkerForm, isValid as isFormValid } from "@/features/workers/schema";

export function useWorkerForm() {
  const [form, setForm] = useState<WorkerFormData>({
    name: "",
    idCardNumber: "",
    zoneId: "",
    photoUrl: DEFAULT_PHOTO_URL,
  });
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [errors, setErrors] = useState<WorkerFormErrors>({});

  const setField = useCallback(<K extends keyof WorkerFormData>(key: K, value: WorkerFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[key as keyof WorkerFormErrors];
      return next;
    });
  }, []);

  const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      setPreviewUrl(result);
      setForm((prev) => ({ ...prev, photoUrl: result }));
    };
    reader.readAsDataURL(file);
  }, []);

  const validate = useCallback(() => {
    const errs = validateWorkerForm(form);
    setErrors(errs);
    return isFormValid(errs);
  }, [form]);

  const reset = useCallback(() => {
    setForm({ name: "", idCardNumber: "", zoneId: "", photoUrl: DEFAULT_PHOTO_URL });
    setPreviewUrl(null);
    setErrors({});
  }, []);

  return { form, previewUrl, errors, setField, handlePhotoUpload, validate, reset };
}
