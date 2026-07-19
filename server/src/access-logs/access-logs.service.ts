import { Injectable } from '@nestjs/common';

export interface AccessLogData {
  id: string;
  workerId: string;
  zoneId: string;
  gateName: string;
  status: 'granted' | 'denied';
  missingPpe: string[];
  timestamp: string;
}

@Injectable()
export class AccessLogsService {
  private logs: AccessLogData[] = [
    {
      id: 'log-1',
      workerId: 'worker-1',
      zoneId: 'zone-2',
      gateName: 'Gate B-1',
      status: 'denied',
      missingPpe: ['hairnet'],
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-2',
      workerId: 'worker-6',
      zoneId: 'zone-1',
      gateName: 'Gate A-2',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 12 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-3',
      workerId: 'worker-2',
      zoneId: 'zone-4',
      gateName: 'Gate D-1',
      status: 'denied',
      missingPpe: ['helmet', 'gloves'],
      timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-4',
      workerId: 'worker-7',
      zoneId: 'zone-3',
      gateName: 'Gate C-1',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 40 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-5',
      workerId: 'worker-8',
      zoneId: 'zone-1',
      gateName: 'Gate A-1',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 62 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-6',
      workerId: 'worker-3',
      zoneId: 'zone-1',
      gateName: 'Gate A-2',
      status: 'denied',
      missingPpe: ['mask'],
      timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-7',
      workerId: 'worker-9',
      zoneId: 'zone-2',
      gateName: 'Gate B-1',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-8',
      workerId: 'worker-4',
      zoneId: 'zone-4',
      gateName: 'Gate D-1',
      status: 'denied',
      missingPpe: ['helmet'],
      timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-9',
      workerId: 'worker-10',
      zoneId: 'zone-3',
      gateName: 'Gate C-2',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 240 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-10',
      workerId: 'worker-5',
      zoneId: 'zone-3',
      gateName: 'Gate C-1',
      status: 'denied',
      missingPpe: ['helmet'],
      timestamp: new Date(Date.now() - 320 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-11',
      workerId: 'worker-3',
      zoneId: 'zone-1',
      gateName: 'Gate A-1',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-12',
      workerId: 'worker-2',
      zoneId: 'zone-4',
      gateName: 'Gate D-1',
      status: 'denied',
      missingPpe: ['safety_shoes'],
      timestamp: new Date(Date.now() - 26 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-13',
      workerId: 'worker-9',
      zoneId: 'zone-2',
      gateName: 'Gate B-1',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 28 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-14',
      workerId: 'worker-5',
      zoneId: 'zone-3',
      gateName: 'Gate C-2',
      status: 'granted',
      missingPpe: [],
      timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-15',
      workerId: 'worker-2',
      zoneId: 'zone-4',
      gateName: 'Gate D-1',
      status: 'denied',
      missingPpe: ['mask'],
      timestamp: new Date(Date.now() - 32 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'log-16',
      workerId: 'worker-8',
      zoneId: 'zone-1',
      gateName: 'Gate A-1',
      status: 'denied',
      missingPpe: ['lab_coat'],
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    },
  ];

  findAll(): AccessLogData[] {
    return this.logs;
  }

  create(data: Omit<AccessLogData, 'id'>): AccessLogData {
    const log: AccessLogData = { id: `log-${this.logs.length + 1}`, ...data };
    this.logs.unshift(log);
    return log;
  }
}
