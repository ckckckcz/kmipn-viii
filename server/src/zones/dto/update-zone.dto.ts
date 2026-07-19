import { CreateZoneDto } from './create-zone.dto';

export class UpdateZoneDto extends CreateZoneDto {
  id!: string;
  complianceScore!: number;
  gateCount!: number;
}
