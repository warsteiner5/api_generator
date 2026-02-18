import { ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto } from '../../../swagger/models/api-market-json-result-of-market-pagination-result-of-list-of-market-organization-short-info-dto';
import { MarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfo } from '../../models/market-json-result-of-market-pagination-result-of-list-of-market-organization-short-info.interface';

export function adaptMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoToUI(source?: ApiMarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfoDto | null): MarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfo {
  return (source ?? {}) as MarketJsonResultOfMarketPaginationResultOfListOfMarketOrganizationShortInfo;
}
