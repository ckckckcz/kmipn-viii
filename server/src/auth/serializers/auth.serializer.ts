// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Serializer untuk memformat data hasil otentikasi.
import { BaseSerializer } from '../../common/serializers/base.serializer';

export class AuthSerializer extends BaseSerializer {
  serializeAuth(token: string, email: string) {
    return {
      accessToken: token,
      email,
    };
  }
}
