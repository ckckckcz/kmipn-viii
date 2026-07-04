// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Skema/migrasi database awal untuk tabel user.
export class UserMigration {
  async up(): Promise<void> {
    console.log('Menjalankan migrasi: Membuat tabel users...');
  }

  async down(): Promise<void> {
    console.log('Menjalankan rollback migrasi: Menghapus tabel users...');
  }
}
