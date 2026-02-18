import { ApiMarketJsonResultOfOrganizationInfoDto } from '../../../swagger/models/api-market-json-result-of-organization-info-dto';
import { MarketJsonResultOfOrganizationInfo } from '../../models/market-json-result-of-organization-info.interface';

export function adaptMarketJsonResultOfOrganizationInfoToUI(source?: ApiMarketJsonResultOfOrganizationInfoDto | null): MarketJsonResultOfOrganizationInfo {
  return (source ?? {}) as MarketJsonResultOfOrganizationInfo;
}
