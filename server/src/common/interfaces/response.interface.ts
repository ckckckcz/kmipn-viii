// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Interface standar untuk response data API.
export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data?: T;
}
