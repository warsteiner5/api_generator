import { ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-company-catalog-organization-dto';
import { MarketPaginationResultOfListOfCompanyCatalogOrganization } from '../../models/market-pagination-result-of-list-of-company-catalog-organization.interface';
import { adaptCompanyCatalogOrganizationToUI } from './company-catalog-organization.adapter';

export function adaptMarketPaginationResultOfListOfCompanyCatalogOrganizationToUI(source?: ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto | null): MarketPaginationResultOfListOfCompanyCatalogOrganization {
  return {
    currentPage: source?.currentPage ?? 0,
    items: (source?.items ?? []).map((item) => adaptCompanyCatalogOrganizationToUI(item)),
    total: source?.total ?? 0,
    totalPages: source?.totalPages ?? 0,
  };
}
