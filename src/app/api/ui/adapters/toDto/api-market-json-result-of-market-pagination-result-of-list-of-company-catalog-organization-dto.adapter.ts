import { MarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganization } from '../../models/market-json-result-of-market-pagination-result-of-list-of-company-catalog-organization.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-company-catalog-organization-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganization | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto;
}
