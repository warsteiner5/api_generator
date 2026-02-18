import { CompanyCatalogOrganization } from './company-catalog-organization.interface';

export interface MarketPaginationResultOfListOfCompanyCatalogOrganization {
  currentPage: number;
  items: CompanyCatalogOrganization[];
  total: number;
  totalPages: number;
}
