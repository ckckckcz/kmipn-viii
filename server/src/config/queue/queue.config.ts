// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi untuk antrean/queue manager (seperti Redis).
export const queueConfig = {
  host: process.env.QUEUE_HOST || 'localhost',
  port: parseInt(process.env.QUEUE_PORT || '6379', 10),
};
