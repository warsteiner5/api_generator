import { ApiMarketJsonResultOfDealExtendedInfo } from '../../../swagger/models/api-market-json-result-of-deal-extended-info';
import { MarketJsonResultOfDealExtendedInfo } from '../../models/market-json-result-of-deal-extended-info.interface';

export function adaptMarketJsonResultOfDealExtendedInfoToUI(source?: ApiMarketJsonResultOfDealExtendedInfo | null): MarketJsonResultOfDealExtendedInfo {
  return (source ?? {}) as MarketJsonResultOfDealExtendedInfo;
}
