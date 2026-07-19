import { api } from "@/lib/api";
import type { Zone } from "@/types";

export const zoneService = {
  getAll: () => api.get<Zone[]>("/zones"),
  getById: (id: string) => api.get<Zone>(`/zones/${id}`),
  create: (data: Omit<Zone, "id" | "complianceScore" | "gateCount">) =>
    api.post<Zone>("/zones", data),
  update: (data: Zone) =>
    api.put<Zone>(`/zones/${data.id}`, data),
};
