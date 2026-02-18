import { ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-company-catalog-organization-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganization } from '../../models/market-json-result-of-market-pagination-result-of-list-of-company-catalog-organization.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto | null): MarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganization {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganization;
}
