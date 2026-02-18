import { ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto } from '../../../swagger/models/api-market-json-result-of-market-composite-organization-short-info-dto';
import { MarketJsonResultOfMarketCompositeOrganizationShortInfo } from '../../models/market-json-result-of-market-composite-organization-short-info.interface';

export function adaptMarketJsonResultOfMarketCompositeOrganizationShortInfoToUI(source?: ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto | null): MarketJsonResultOfMarketCompositeOrganizationShortInfo {
  return (source ?? {}) as MarketJsonResultOfMarketCompositeOrganizationShortInfo;
}
