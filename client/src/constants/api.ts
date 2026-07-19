export const API = {
  BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080",
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/api/v1/auth/login",
      REGISTER: "/api/v1/auth/register",
      REFRESH: "/api/v1/auth/refresh",
      LOGOUT: "/api/v1/auth/logout",
    },
    WORKERS: "/api/v1/workers",
    ZONES: "/api/v1/zones",
    VIOLATIONS: "/api/v1/violations",
    ACCESS_LOGS: "/api/v1/access-logs",
    DASHBOARD: "/api/v1/dashboard",
  },
} as const;
