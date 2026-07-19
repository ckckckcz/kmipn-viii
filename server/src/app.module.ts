import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZonesModule } from './zones/zones.module';
import { WorkersModule } from './workers/workers.module';
import { ViolationsModule } from './violations/violations.module';
import { AccessLogsModule } from './access-logs/access-logs.module';
import { GateModule } from './gate/gate.module';

@Module({
  imports: [
    ZonesModule,
    WorkersModule,
    ViolationsModule,
    AccessLogsModule,
    GateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
