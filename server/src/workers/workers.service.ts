import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';

export interface WorkerData {
  id: string;
  name: string;
  idCardNumber: string;
  photoUrl: string;
  zoneId: string;
  complianceRate: number;
}

@Injectable()
export class WorkersService {
  private workers: WorkerData[] = [
    { id: 'worker-1', name: 'Supriyadi', idCardNumber: 'ID-09283-SPY', photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&q=80', zoneId: 'zone-2', complianceRate: 85.0 },
    { id: 'worker-2', name: 'Joko Anwar', idCardNumber: 'ID-01824-JKW', photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop&q=80', zoneId: 'zone-4', complianceRate: 72.4 },
    { id: 'worker-3', name: 'Andi Wijaya', idCardNumber: 'ID-07491-ADW', photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80', zoneId: 'zone-1', complianceRate: 90.1 },
    { id: 'worker-4', name: 'Dewi Lestari', idCardNumber: 'ID-11029-DWL', photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&q=80', zoneId: 'zone-4', complianceRate: 95.5 },
    { id: 'worker-5', name: 'Rudi Hermawan', idCardNumber: 'ID-04281-RDH', photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80', zoneId: 'zone-3', complianceRate: 98.0 },
    { id: 'worker-6', name: 'Agus Pratama', idCardNumber: 'ID-03912-AGP', photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80', zoneId: 'zone-1', complianceRate: 96.2 },
    { id: 'worker-7', name: 'Siti Aminah', idCardNumber: 'ID-08492-SMA', photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&q=80', zoneId: 'zone-3', complianceRate: 100.0 },
    { id: 'worker-8', name: 'Hendra Wijaya', idCardNumber: 'ID-09210-HDW', photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&q=80', zoneId: 'zone-1', complianceRate: 94.7 },
    { id: 'worker-9', name: 'Rina Marlina', idCardNumber: 'ID-02981-RNM', photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&q=80', zoneId: 'zone-2', complianceRate: 97.8 },
    { id: 'worker-10', name: 'Taufik Hidayat', idCardNumber: 'ID-03381-TFH', photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&q=80', zoneId: 'zone-3', complianceRate: 99.1 },
  ];

  findAll(): WorkerData[] {
    return this.workers;
  }

  findOne(id: string): WorkerData | undefined {
    return this.workers.find((w) => w.id === id);
  }

  create(dto: CreateWorkerDto): WorkerData {
    const worker: WorkerData = { id: `worker-${this.workers.length + 1}`, ...dto, complianceRate: 100 };
    this.workers.push(worker);
    return worker;
  }

  update(dto: UpdateWorkerDto): WorkerData {
    const idx = this.workers.findIndex((w) => w.id === dto.id);
    if (idx === -1) throw new Error('Worker not found');
    this.workers[idx] = dto;
    return dto;
  }

  updateRate(id: string, delta: number): void {
    const worker = this.workers.find((w) => w.id === id);
    if (!worker) return;
    worker.complianceRate = Math.max(0, Math.min(100, parseFloat((worker.complianceRate + delta).toFixed(1))));
  }
}
