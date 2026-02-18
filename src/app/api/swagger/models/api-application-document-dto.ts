/* tslint:disable */
/* eslint-disable */
import { ApiTradeLotApplicationDocumentTypeEnum } from '../models/api-trade-lot-application-document-type-enum';
export interface ApiApplicationDocumentDto {
  DocumentType?: ApiTradeLotApplicationDocumentTypeEnum;
  FileName?: string | null;
  FileSize?: number | null;
  Id?: string | null;
  UploadDate?: string;
  Url?: string | null;
}
