import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

export interface ExternalDealDocument {
  fileName: string;
  guidId: string;
  id: number;
  name: string;
  size: number;
  tradeDocumentType: TradeDocumentTypeEnum;
  uploadDate: string;
}
