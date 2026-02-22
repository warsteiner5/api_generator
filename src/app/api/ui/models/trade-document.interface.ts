import { TradeDocumentTypeEnum } from '../enums/trade-document-type.enum';

// @ts-ignore
export interface TradeDocument {
  fileName: string;
  fileSize: number;
  id: string;
  tradeDocumentType: TradeDocumentTypeEnum;
  uploadDate: string;
  url: string;
  userFileNameFromOuterSystem: string;
}
