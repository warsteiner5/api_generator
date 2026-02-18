import { MarketJsonResultOfDealExtendedInfo } from '../../models/market-json-result-of-deal-extended-info.interface';
import { ApiMarketJsonResultOfDealExtendedInfo } from '../../../swagger/models/api-market-json-result-of-deal-extended-info';

export function adaptApiMarketJsonResultOfDealExtendedInfo(source?: MarketJsonResultOfDealExtendedInfo | null): ApiMarketJsonResultOfDealExtendedInfo {
  return (source ?? {}) as ApiMarketJsonResultOfDealExtendedInfo;
}
