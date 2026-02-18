/* tslint:disable */
/* eslint-disable */
import { ApiCompanyCatalogOrganizationDto } from '../models/api-company-catalog-organization-dto';
export interface ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto {
  currentPage?: number;
  items?: Array<ApiCompanyCatalogOrganizationDto> | null;
  total?: number;
  totalPages?: number;
}
