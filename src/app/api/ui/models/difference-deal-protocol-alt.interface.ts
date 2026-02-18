import { DealObjectEnum } from '../enums/deal-object.enum';

export interface DifferenceDealProtocolAlt {
  chatId: number;
  dealObject: DealObjectEnum;
  documentGuids: string[];
  id: number;
  reason: string;
}
