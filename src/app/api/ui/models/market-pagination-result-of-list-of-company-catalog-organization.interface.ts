import { CompanyCatalogOrganization } from './company-catalog-organization.interface';

// @ts-ignore
export interface MarketPaginationResultOfListOfCompanyCatalogOrganization {
  currentPage: number;
  items: CompanyCatalogOrganization[];
  total: number;
  totalPages: number;
}
