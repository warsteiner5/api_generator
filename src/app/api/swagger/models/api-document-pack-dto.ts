/* tslint:disable */
/* eslint-disable */
import { ApiDealDocumentDto } from '../models/api-deal-document-dto';
export interface ApiDocumentPackDto {
  CreateAt?: string;
  Documents?: Array<ApiDealDocumentDto> | null;
  Id?: number;
  IsActual?: boolean;
}
