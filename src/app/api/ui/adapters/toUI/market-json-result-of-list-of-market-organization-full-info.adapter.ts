import { ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-market-organization-full-info-dto';
import { MarketJsonResultOfListOfMarketOrganizationFullInfo } from '../../models/market-json-result-of-list-of-market-organization-full-info.interface';

export function adaptMarketJsonResultOfListOfMarketOrganizationFullInfoToUI(source?: ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto | null): MarketJsonResultOfListOfMarketOrganizationFullInfo {
  return (source ?? {}) as MarketJsonResultOfListOfMarketOrganizationFullInfo;
}
