import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

// @ts-ignore
export interface Document {
  fileName: string;
  id: string;
  tradeDocumentType: TradeDocumentTypeEnum;
  uploadDate: string;
  url: string;
}
