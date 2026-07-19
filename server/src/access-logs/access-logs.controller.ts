import { Controller, Get } from '@nestjs/common';
import { AccessLogsService } from './access-logs.service';

@Controller('api/access-logs')
export class AccessLogsController {
  constructor(private readonly accessLogsService: AccessLogsService) {}

  @Get()
  findAll() {
    return { success: true, data: this.accessLogsService.findAll() };
  }
}
