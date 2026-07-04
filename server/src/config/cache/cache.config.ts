// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Konfigurasi untuk penyimpanan cache (TTL, host, port).
export const cacheConfig = {
  ttl: parseInt(process.env.CACHE_TTL || '600', 10),
  host: process.env.CACHE_HOST || 'localhost',
  port: parseInt(process.env.CACHE_PORT || '6379', 10),
};
