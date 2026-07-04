// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Factory untuk membuat dummy data user secara dinamis.
import { UserEntity } from '../../../models/users/entities/user.entity';

export class UserFactory {
  static create(attributes: Partial<UserEntity> = {}): UserEntity {
    return new UserEntity({
      id: Math.random().toString(36).substring(2, 11),
      name: 'Default User',
      email: 'user@example.com',
      createdAt: new Date(),
      ...attributes,
    });
  }
}
