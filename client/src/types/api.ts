export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type PaginatedResponse<T> = {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
};

export type ApiError = {
  success: false;
  error: {
    code: string;
    message: string;
  };
};
