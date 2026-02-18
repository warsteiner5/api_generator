/* tslint:disable */
/* eslint-disable */
import { ApiTradeDocumentTypeEnum } from '../models/api-trade-document-type-enum';
export interface ApiTradeDocumentDto {
  FileName?: string | null;
  FileSize?: number | null;
  Id?: string | null;
  TradeDocumentType?: ApiTradeDocumentTypeEnum | null;
  UploadDate?: string;
  Url?: string | null;
  UserFileNameFromOuterSystem?: string | null;
}
