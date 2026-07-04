// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Seeder untuk menginisialisasi database dengan data user bawaan.
import { UserFactory } from '../factories/users/user.factory';

export class UserSeeder {
  async seed(): Promise<void> {
    const admin = UserFactory.create({ name: 'Admin', email: 'admin@kmipn.com' });
    console.log('Melakukan seeding data user:', admin.email);
  }
}
