// (file ini cmn starter boleh dihapus guys)
// Deskripsi: Middleware untuk mencatat log setiap request masuk.
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`[HTTP Request] ${req.method} ${req.originalUrl}`);
    next();
  }
}
