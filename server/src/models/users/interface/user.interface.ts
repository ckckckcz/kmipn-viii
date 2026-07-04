// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Interface mendefinisikan struktur data model User.
export interface IUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
}
