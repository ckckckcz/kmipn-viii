// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Entity class untuk representasi objek User dalam database/ORM.
import { IUser } from '../interface/user.interface';

export class UserEntity implements IUser {
  id!: string;
  name!: string;
  email!: string;
  password?: string;
  createdAt!: Date;

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
