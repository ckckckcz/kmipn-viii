// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Serializer dasar untuk mengubah struktur data sebelum dikirim ke client.
export class BaseSerializer {
  serialize<T, R>(data: T): R {
    return data as unknown as R;
  }
}
