import { MarketPaginationResultOfListOfCompanyCatalogOrganization } from '../../models/market-pagination-result-of-list-of-company-catalog-organization.interface';
import { ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../../../swagger/models/api-market-pagination-result-of-list-of-company-catalog-organization-dto';
import { apiCompanyCatalogOrganizationDtoAdapter } from './api-company-catalog-organization-dto.adapter';

export const apiMarketPaginationResultOfListOfCompanyCatalogOrganizationDtoAdapter = (source?: MarketPaginationResultOfListOfCompanyCatalogOrganization | null): ApiMarketPaginationResultOfListOfCompanyCatalogOrganizationDto => {
  return {
    currentPage: source?.currentPage,
    items: source?.items?.map((item) => apiCompanyCatalogOrganizationDtoAdapter(item)),
    total: source?.total,
    totalPages: source?.totalPages,
  };
}
