import { DealObjectEnum } from '../enums/deal-object.enum';

export interface SendDealToReworkRequest {
  chatId: number;
  comment: string;
  contractExecutionDate: string;
  dealId: number;
  dealObject: DealObjectEnum;
  fileIds: string[];
}
