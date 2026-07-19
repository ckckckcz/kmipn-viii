import { api } from "@/services/api";

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

export async function login(data: LoginRequest): Promise<LoginResponse> {
  return api.post("/api/v1/auth/login", data);
}

export async function refreshToken(refresh_token: string) {
  return api.post("/api/v1/auth/refresh", { refresh_token });
}

export async function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("user");
}
