/* tslint:disable */
/* eslint-disable */
import { ApiMarketOrganizationDocumentTypeEnum } from '../models/api-market-organization-document-type-enum';
export interface ApiOrganizationProfileDocumentDto {
  Comment?: string | null;
  DocumentType?: ApiMarketOrganizationDocumentTypeEnum;
  FileGuid?: string;
  FileName?: string | null;
  FileSize?: number;
}
