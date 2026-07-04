// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Exception kustom untuk menangani error spesifik dalam aplikasi.
import { HttpException, HttpStatus } from '@nestjs/common';

export class CustomException extends HttpException {
  constructor(message = 'Terjadi kesalahan sistem') {
    super(message, HttpStatus.BAD_REQUEST);
  }
}
