import { MarketJsonResultOfBiddingInfo } from '../../models/market-json-result-of-bidding-info.interface';
import { ApiMarketJsonResultOfBiddingInfo } from '../../../swagger/models/api-market-json-result-of-bidding-info';

export function adaptApiMarketJsonResultOfBiddingInfo(source?: MarketJsonResultOfBiddingInfo | null): ApiMarketJsonResultOfBiddingInfo {
  return (source ?? {}) as ApiMarketJsonResultOfBiddingInfo;
}
