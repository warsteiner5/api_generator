import { DealObjectEnum } from '../enums/deal-object.enum';

// @ts-ignore
export interface DifferenceDealProtocolAlt {
  chatId: number;
  dealObject: DealObjectEnum;
  documentGuids: string[];
  id: number;
  reason: string;
}
