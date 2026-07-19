export interface WorkerFormData {
  name: string;
  idCardNumber: string;
  zoneId: string;
  photoUrl: string;
}

export interface WorkerFormErrors {
  name?: string;
  idCardNumber?: string;
  zoneId?: string;
}
