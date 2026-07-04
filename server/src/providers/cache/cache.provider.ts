// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Provider/service cache untuk menyimpan dan mengambil data sementara.
import { cacheConfig } from '../../config/cache/cache.config';

export class CacheProvider {
  private cache = new Map<string, { value: any; expiry: number }>();

  async set(key: string, value: any, ttl = cacheConfig.ttl): Promise<void> {
    const expiry = Date.now() + ttl * 1000;
    this.cache.set(key, { value, expiry });
  }

  async get(key: string): Promise<any | null> {
    const data = this.cache.get(key);
    if (!data) return null;
    if (Date.now() > data.expiry) {
      this.cache.delete(key);
      return null;
    }
    return data.value;
  }
}
