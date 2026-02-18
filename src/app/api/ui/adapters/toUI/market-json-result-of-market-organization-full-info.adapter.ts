import { ApiMarketJsonResultOfMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-json-result-of-market-organization-full-info-dto';
import { MarketJsonResultOfMarketOrganizationFullInfo } from '../../models/market-json-result-of-market-organization-full-info.interface';

export function adaptMarketJsonResultOfMarketOrganizationFullInfoToUI(source?: ApiMarketJsonResultOfMarketOrganizationFullInfoDto | null): MarketJsonResultOfMarketOrganizationFullInfo {
  return (source ?? {}) as MarketJsonResultOfMarketOrganizationFullInfo;
}
