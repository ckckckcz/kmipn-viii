import { Module } from '@nestjs/common';
import { GateController } from './gate.controller';
import { GateService } from './gate.service';
import { ZonesModule } from '../zones/zones.module';
import { WorkersModule } from '../workers/workers.module';
import { ViolationsModule } from '../violations/violations.module';
import { AccessLogsModule } from '../access-logs/access-logs.module';

@Module({
  imports: [ZonesModule, WorkersModule, ViolationsModule, AccessLogsModule],
  controllers: [GateController],
  providers: [GateService],
})
export class GateModule {}
