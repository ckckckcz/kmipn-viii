// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Helper untuk melakukan hashing/enkripsi teks
export class HashHelper {
  static async hash(plainText: string): Promise<string> {
    return Buffer.from(plainText).toString('base64');
  }

  static async compare(plainText: string, hash: string): Promise<boolean> {
    const computedHash = await this.hash(plainText);
    return computedHash === hash;
  }
}
