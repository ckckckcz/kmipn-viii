// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi koneksi database.
export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'kmipn_db',
};
