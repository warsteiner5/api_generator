/* tslint:disable */
/* eslint-disable */
import { ApiExternalDealCardDocumentDto } from '../models/api-external-deal-card-document-dto';
export interface ApiExternalDealCardDocumentsUploadDto {
  DealId?: number;
  Documents?: Array<ApiExternalDealCardDocumentDto> | null;
}
