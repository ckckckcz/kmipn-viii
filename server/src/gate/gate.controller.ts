import { Controller, Post, Body } from '@nestjs/common';
import { GateService } from './gate.service';

@Controller('api/gate')
export class GateController {
  constructor(private readonly gateService: GateService) {}

  @Post('scan')
  scan(@Body() body: { workerId: string; zoneId: string; isPpeComplete: boolean; missingItems: string[] }) {
    return { success: true, data: this.gateService.scan(body.workerId, body.zoneId, body.isPpeComplete, body.missingItems) };
  }
}
