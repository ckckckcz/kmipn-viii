// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Guard untuk memvalidasi token otentikasi pada request.
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    // Validasi token sederhana :D
    return !!request.headers.authorization;
  }
}
