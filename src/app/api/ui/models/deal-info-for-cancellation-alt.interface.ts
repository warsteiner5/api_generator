import { DealObjectEnum } from '../enums/deal-object.enum';

export interface DealInfoForCancellationAlt {
  applicationId: number;
  comment: string;
  dealObject: DealObjectEnum;
  id: number;
}
