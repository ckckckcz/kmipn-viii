// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Provider database untuk mengelola koneksi database aplikasi.
import { dbConfig } from '../../config/database/db.config';

export class DatabaseProvider {
  async connect(): Promise<void> {
    console.log(`Menghubungkan ke database ${dbConfig.database} di ${dbConfig.host}:${dbConfig.port}...`);
  }
}
