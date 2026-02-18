/* tslint:disable */
/* eslint-disable */
import { ApiTradeDocumentTypeEnum } from '../models/api-trade-document-type-enum';
export interface ApiExternalDealDocumentDto {
  FileName?: string | null;
  GuidId?: string;
  Id?: number | null;
  Name?: string | null;
  Size?: number | null;
  TradeDocumentType?: ApiTradeDocumentTypeEnum | null;
  UploadDate?: string | null;
}
