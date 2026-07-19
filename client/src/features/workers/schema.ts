import { WorkerFormData, WorkerFormErrors } from "@/features/workers/types";

export function validateWorkerForm(data: WorkerFormData): WorkerFormErrors {
  const errors: WorkerFormErrors = {};
  if (!data.name.trim()) errors.name = "Nama pekerja harus diisi";
  if (!data.idCardNumber.trim()) errors.idCardNumber = "Nomor ID card harus diisi";
  if (!data.zoneId) errors.zoneId = "Zona penugasan harus dipilih";
  return errors;
}

export function isValid(data: WorkerFormErrors): boolean {
  return Object.keys(data).length === 0;
}
