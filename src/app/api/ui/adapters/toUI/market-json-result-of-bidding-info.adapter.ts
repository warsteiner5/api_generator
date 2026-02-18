import { ApiMarketJsonResultOfBiddingInfo } from '../../../swagger/models/api-market-json-result-of-bidding-info';
import { MarketJsonResultOfBiddingInfo } from '../../models/market-json-result-of-bidding-info.interface';

export function adaptMarketJsonResultOfBiddingInfoToUI(source?: ApiMarketJsonResultOfBiddingInfo | null): MarketJsonResultOfBiddingInfo {
  return (source ?? {}) as MarketJsonResultOfBiddingInfo;
}
