import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

export interface Document {
  fileName: string;
  id: string;
  tradeDocumentType: TradeDocumentTypeEnum;
  uploadDate: string;
  url: string;
}
