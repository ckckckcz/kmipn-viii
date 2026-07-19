import { api } from "@/lib/api";
import type { Worker } from "@/types";

export const workerService = {
  getAll: () => api.get<Worker[]>("/workers"),
  getById: (id: string) => api.get<Worker>(`/workers/${id}`),
  create: (data: Omit<Worker, "id" | "complianceRate">) =>
    api.post<Worker>("/workers", data),
  update: (data: Worker) =>
    api.put<Worker>(`/workers/${data.id}`, data),
};
