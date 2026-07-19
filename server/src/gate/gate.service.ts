import { Injectable } from '@nestjs/common';
import { ZonesService } from '../zones/zones.service';
import { WorkersService } from '../workers/workers.service';
import {
  ViolationsService,
  ViolationData,
} from '../violations/violations.service';
import { AccessLogsService } from '../access-logs/access-logs.service';

@Injectable()
export class GateService {
  constructor(
    private readonly zonesService: ZonesService,
    private readonly workersService: WorkersService,
    private readonly violationsService: ViolationsService,
    private readonly accessLogsService: AccessLogsService,
  ) {}

  scan(
    workerId: string,
    zoneId: string,
    isPpeComplete: boolean,
    missingItems: string[],
  ) {
    const timestamp = new Date().toISOString();
    const zone = this.zonesService.findOne(zoneId);
    const zoneLabel = zone
      ? `Gate ${zone.name.split(' - ')[0].replace('Zona ', '')}-1`
      : 'Gate-1';

    const log = this.accessLogsService.create({
      workerId,
      zoneId,
      gateName: zoneLabel,
      status: isPpeComplete ? 'granted' : 'denied',
      missingPpe: missingItems,
      timestamp,
    });

    let violation: ViolationData | null = null;
    if (!isPpeComplete) {
      const images = [
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
      ];
      violation = this.violationsService.create({
        workerId,
        zoneId,
        missingPpe: missingItems,
        screenshotUrl: images[Math.floor(Math.random() * images.length)],
        confidenceScore: Math.floor(Math.random() * 15) + 80,
        followUpStatus: 'new',
        timestamp,
      });
      this.workersService.updateRate(workerId, -5);
      this.zonesService.updateScore(zoneId, -2.5);
    } else {
      this.workersService.updateRate(workerId, 1);
      this.zonesService.updateScore(zoneId, 0.5);
    }

    return { log, violation };
  }
}
