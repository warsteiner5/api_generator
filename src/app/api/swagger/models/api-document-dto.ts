/* tslint:disable */
/* eslint-disable */
import { ApiTradeDocumentTypeEnum } from '../models/api-trade-document-type-enum';
export interface ApiDocumentDto {
  FileName?: string | null;
  Id?: string | null;
  TradeDocumentType?: ApiTradeDocumentTypeEnum | null;
  UploadDate?: string;
  Url?: string | null;
}
