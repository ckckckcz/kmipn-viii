import { api } from "@/lib/api";
import type { Violation } from "@/types";

export const violationService = {
  getAll: () => api.get<Violation[]>("/violations"),
  getById: (id: string) => api.get<Violation>(`/violations/${id}`),
};
