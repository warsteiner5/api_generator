import { DealObjectEnum } from '../enums/deal-object.enum';

// @ts-ignore
export interface DealInfoForCancellationAlt {
  applicationId: number;
  comment: string;
  dealObject: DealObjectEnum;
  id: number;
}
