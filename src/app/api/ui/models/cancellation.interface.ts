import { DealObjectEnum } from '../enums/deal-object.enum';

export interface Cancellation {
  cancellationReason: string;
  dealObject: DealObjectEnum;
  id: number;
}
