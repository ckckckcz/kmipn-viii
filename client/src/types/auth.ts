export type User = {
  id: string;
  name: string;
  email: string;
  role: "admin" | "supervisor" | "safety_officer";
  avatar?: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};
