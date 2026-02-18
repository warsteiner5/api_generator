/* tslint:disable */
/* eslint-disable */
import { ApiOrganizationDocumentDto } from '../models/api-organization-document-dto';
export interface ApiMarketPaginationResultOfListOfOrganizationDocumentDto {
  currentPage?: number;
  items?: Array<ApiOrganizationDocumentDto> | null;
  total?: number;
  totalPages?: number;
}
