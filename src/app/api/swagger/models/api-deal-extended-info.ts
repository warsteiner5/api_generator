/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentDto } from '../models/api-deal-document-dto';
export interface ApiDealExtendedInfoAltDto {
  ConcludeDate?: string;
  DealId?: number;
  DealNumber?: string | null;
  DealTerms?: string | null;
  Documents?: Array<ApiDealDocumentDto> | null;
}
