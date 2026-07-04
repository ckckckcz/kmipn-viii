// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Service dasar untuk melakukan request HTTP (fetch) ke backend.
import { API_CONFIG } from '../config/api.config';

export class ApiService {
  static async get<T>(path: string): Promise<T> {
    const response = await fetch(`${API_CONFIG.BASE_URL}${path}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json() as Promise<T>;
  }
}
