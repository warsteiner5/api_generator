import { ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-company-catalog-organization-dto';
import { MarketPaginationResultOfListOfCompanyCatalogOrganization } from '../../models/market-pagination-result-of-list-of-company-catalog-organization.interface';
import { companyCatalogOrganizationAdapter } from './company-catalog-organization.adapter';

export const marketPaginationResultOfListOfCompanyCatalogOrganizationAdapter = (source?: ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto | null): MarketPaginationResultOfListOfCompanyCatalogOrganization => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => companyCatalogOrganizationAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
