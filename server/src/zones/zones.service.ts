import { Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';

export interface ZoneData {
  id: string;
  name: string;
  description: string;
  riskLevel: 'low' | 'medium' | 'high';
  requiredPpe: string[];
  complianceScore: number;
  gateCount: number;
}

@Injectable()
export class ZonesService {
  private zones: ZoneData[] = [
    { id: 'zone-1', name: 'Zona A - Filling & Processing', description: 'Area pengisian dan pemrosesan susu cair steril. Higienitas tinggi diperlukan.', riskLevel: 'high', requiredPpe: ['helmet', 'mask', 'lab_coat', 'gloves'], complianceScore: 92.4, gateCount: 2 },
    { id: 'zone-2', name: 'Zona B - Packing Line 1', description: 'Area pengemasan karton produk akhir. Potensi paparan mesin bergerak.', riskLevel: 'medium', requiredPpe: ['helmet', 'mask', 'safety_shoes', 'hairnet'], complianceScore: 88.5, gateCount: 1 },
    { id: 'zone-3', name: 'Zona C - Warehouse & Loading', description: 'Area penyimpanan logistik dan muatan barang. Lalu lintas forklift padat.', riskLevel: 'high', requiredPpe: ['helmet', 'safety_shoes'], complianceScore: 94.2, gateCount: 2 },
    { id: 'zone-4', name: 'Zona D - Raw Material Prep', description: 'Area penyiapan bahan baku susu segar dan pencampuran formula dasar.', riskLevel: 'medium', requiredPpe: ['helmet', 'mask', 'gloves', 'safety_shoes'], complianceScore: 78.9, gateCount: 1 },
  ];

  findAll(): ZoneData[] {
    return this.zones;
  }

  findOne(id: string): ZoneData | undefined {
    return this.zones.find((z) => z.id === id);
  }

  create(dto: CreateZoneDto): ZoneData {
    const zone: ZoneData = { id: `zone-${this.zones.length + 1}`, ...dto, complianceScore: 100, gateCount: 1 };
    this.zones.push(zone);
    return zone;
  }

  update(dto: UpdateZoneDto): ZoneData {
    const idx = this.zones.findIndex((z) => z.id === dto.id);
    if (idx === -1) throw new Error('Zone not found');
    this.zones[idx] = dto;
    return dto;
  }

  updateScore(id: string, delta: number): void {
    const zone = this.zones.find((z) => z.id === id);
    if (!zone) return;
    zone.complianceScore = Math.max(0, Math.min(100, parseFloat((zone.complianceScore + delta).toFixed(1))));
  }
}
