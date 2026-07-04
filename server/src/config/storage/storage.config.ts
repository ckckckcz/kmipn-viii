// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi penyimpanan file media/storage.
export const storageConfig = {
  driver: process.env.STORAGE_DRIVER || 'local',
  uploadDir: process.env.STORAGE_UPLOAD_DIR || './uploads',
};
