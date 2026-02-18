/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentDto } from '../models/api-deal-document-dto';
export interface ApiActualDocumentInfoAltDto {
  Description?: string | null;
  DocumentType?: number;
  Documents?: Array<ApiDealDocumentDto> | null;
}
