// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Menyimpan tipe data (TypeScript interfaces/types) yang digunakan secara global.
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface ApiError {
  message: string;
  status: number;
}
