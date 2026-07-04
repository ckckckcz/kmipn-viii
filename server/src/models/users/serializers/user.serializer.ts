// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Serializer untuk menyaring data sensitif (seperti password) dari objek User.
import { BaseSerializer } from '../../../common/serializers/base.serializer';
import { IUser } from '../interface/user.interface';

export class UserSerializer extends BaseSerializer {
  serializeUser(user: IUser): Omit<IUser, 'password'> {
    const { password, ...safeUser } = user;
    return safeUser;
  }
}
