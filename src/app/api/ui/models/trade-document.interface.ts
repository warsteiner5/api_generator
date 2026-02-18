import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

export interface TradeDocument {
  fileName: string;
  fileSize: number;
  id: string;
  tradeDocumentType: TradeDocumentTypeEnum;
  uploadDate: string;
  url: string;
  userFileNameFromOuterSystem: string;
}
