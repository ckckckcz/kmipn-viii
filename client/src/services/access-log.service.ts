import { api } from "@/lib/api";
import type { AccessLog } from "@/types";

export const accessLogService = {
  getAll: () => api.get<AccessLog[]>("/access-logs"),
};

export const gateService = {
  scan: (data: { workerId: string; zoneId: string; isPpeComplete: boolean; missingItems: string[] }) =>
    api.post<{ log: AccessLog; violation?: unknown }>("/gate/scan", data),
};
