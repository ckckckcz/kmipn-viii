// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi dasar untuk koneksi API ke server backend.
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  TIMEOUT: 10000,
};
