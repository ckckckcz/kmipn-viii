export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  DASHBOARD: "/dashboard",
  WORKERS: "/workers",
  WORKER_DETAIL: (id: string) => /workers/,
  WORKER_NEW: "/workers/new",
  ZONES: "/zones",
  ZONE_DETAIL: (id: string) => /zones/,
  ZONE_NEW: "/zones/new",
  VIOLATIONS: "/violations",
  VIOLATION_DETAIL: (id: string) => /violations/,
  CCTV: "/cctv",
  GATE_MONITOR: "/gate-monitor",
  AI_SAFETY_OFFICER: "/ai-safety-officer",
} as const;

export type RouteKey = keyof typeof ROUTES;
