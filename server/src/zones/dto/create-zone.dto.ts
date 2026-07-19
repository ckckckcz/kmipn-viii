export class CreateZoneDto {
  name!: string;
  description!: string;
  riskLevel!: 'low' | 'medium' | 'high';
  requiredPpe!: string[];
}
