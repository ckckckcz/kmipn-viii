import { CreateWorkerDto } from './create-worker.dto';

export class UpdateWorkerDto extends CreateWorkerDto {
  id!: string;
  complianceRate!: number;
}
