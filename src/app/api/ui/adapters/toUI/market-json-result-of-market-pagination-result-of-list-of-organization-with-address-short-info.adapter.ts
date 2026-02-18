import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-organization-with-address-short-info.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto | null): MarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfo {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfo;
}
