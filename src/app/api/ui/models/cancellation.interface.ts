import { DealObjectEnum } from '../enums/deal-object.enum';

// @ts-ignore
export interface Cancellation {
  cancellationReason: string;
  dealObject: DealObjectEnum;
  id: number;
}
