// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Pipe kustom untuk memvalidasi input data.
import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('Data input tidak boleh kosong');
    }
    return value;
  }
}
