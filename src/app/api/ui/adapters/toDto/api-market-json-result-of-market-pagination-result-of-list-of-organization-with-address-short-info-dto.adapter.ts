import { MarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-organization-with-address-short-info.interface';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-organization-with-address-short-info-dto';

export function adaptApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto(source?: MarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfo | null): ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto;
}
