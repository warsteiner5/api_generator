import { DealObjectEnum } from '../enums/deal-object.enum';

export interface RejectChangeFormToPaper {
  dealId: number;
  dealObject: DealObjectEnum;
}
