import { ApiMarketJsonResultOfMarketOrganizationCommonInfoDto } from '../../../swagger/models/api-market-json-result-of-market-organization-common-info-dto';
import { MarketJsonResultOfMarketOrganizationCommonInfo } from '../../models/market-json-result-of-market-organization-common-info.interface';

export function adaptMarketJsonResultOfMarketOrganizationCommonInfoToUI(source?: ApiMarketJsonResultOfMarketOrganizationCommonInfoDto | null): MarketJsonResultOfMarketOrganizationCommonInfo {
  return (source ?? {}) as MarketJsonResultOfMarketOrganizationCommonInfo;
}
