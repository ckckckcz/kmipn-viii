// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi dasar untuk aplikasi (port, env, name).
export const appConfig = {
  port: parseInt(process.env.PORT || '3000', 10),
  env: process.env.NODE_ENV || 'development',
  name: 'KMIPN Server',
};
