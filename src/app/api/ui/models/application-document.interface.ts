import { TradeLotApplicationDocumentTypeEnum } from '../enums/trade-lot-application-document-type.enum';

// @ts-ignore
export interface ApplicationDocument {
  documentType: TradeLotApplicationDocumentTypeEnum;
  fileName: string;
  fileSize: number;
  id: string;
  uploadDate: string;
  url: string;
}
