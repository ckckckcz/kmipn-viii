import { Injectable } from '@nestjs/common';

export interface ViolationData {
  id: string;
  workerId: string;
  zoneId: string;
  missingPpe: string[];
  screenshotUrl: string;
  confidenceScore: number;
  followUpStatus: 'new' | 'in_progress' | 'resolved';
  supervisorNote?: string;
  timestamp: string;
}

@Injectable()
export class ViolationsService {
  private violations: ViolationData[] = [
    {
      id: 'violation-1',
      workerId: 'worker-1',
      zoneId: 'zone-2',
      missingPpe: ['hairnet'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      confidenceScore: 89,
      followUpStatus: 'new',
      supervisorNote: 'Terdeteksi saat memasuki Gate 1 Packing Line.',
      timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-2',
      workerId: 'worker-2',
      zoneId: 'zone-4',
      missingPpe: ['helmet', 'gloves'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      confidenceScore: 92,
      followUpStatus: 'in_progress',
      supervisorNote:
        'Pekerja mengklaim sarung tangan basah dan helm tertinggal di loker.',
      timestamp: new Date(Date.now() - 25 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-3',
      workerId: 'worker-3',
      zoneId: 'zone-1',
      missingPpe: ['mask'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
      confidenceScore: 87,
      followUpStatus: 'new',
      timestamp: new Date(Date.now() - 75 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-4',
      workerId: 'worker-4',
      zoneId: 'zone-4',
      missingPpe: ['helmet'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      confidenceScore: 94,
      followUpStatus: 'resolved',
      supervisorNote:
        'Sudah diberikan helm cadangan dari pos security dan diberikan teguran lisan.',
      timestamp: new Date(Date.now() - 180 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-5',
      workerId: 'worker-5',
      zoneId: 'zone-3',
      missingPpe: ['helmet'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop',
      confidenceScore: 88,
      followUpStatus: 'resolved',
      supervisorNote:
        'Pekerja langsung memakai helm setelah diperingatkan sistem audio otomatis.',
      timestamp: new Date(Date.now() - 320 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-6',
      workerId: 'worker-1',
      zoneId: 'zone-2',
      missingPpe: ['mask'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
      confidenceScore: 91,
      followUpStatus: 'in_progress',
      supervisorNote: 'Sedang dilakukan pengecekan stok masker di Gate 1.',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-7',
      workerId: 'worker-2',
      zoneId: 'zone-4',
      missingPpe: ['safety_shoes'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      confidenceScore: 85,
      followUpStatus: 'new',
      timestamp: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    },
    {
      id: 'violation-8',
      workerId: 'worker-8',
      zoneId: 'zone-1',
      missingPpe: ['lab_coat'],
      screenshotUrl:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop',
      confidenceScore: 93,
      followUpStatus: 'resolved',
      supervisorNote:
        'Mengenakan jas lab yang basah diganti dengan jas lab kering cadangan.',
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    },
  ];

  findAll(): ViolationData[] {
    return this.violations;
  }

  findOne(id: string): ViolationData | undefined {
    return this.violations.find((v) => v.id === id);
  }

  create(data: Omit<ViolationData, 'id'>): ViolationData {
    const violation: ViolationData = {
      id: `violation-${this.violations.length + 1}`,
      ...data,
    };
    this.violations.unshift(violation);
    return violation;
  }
}
