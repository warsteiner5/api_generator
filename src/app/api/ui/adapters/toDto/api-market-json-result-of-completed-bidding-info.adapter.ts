import { MarketJsonResultOfCompletedBiddingInfo } from '../../models/market-json-result-of-completed-bidding-info.interface';
import { ApiMarketJsonResultOfCompletedBiddingInfo } from '../../../swagger/models/api-market-json-result-of-completed-bidding-info';

export function adaptApiMarketJsonResultOfCompletedBiddingInfo(source?: MarketJsonResultOfCompletedBiddingInfo | null): ApiMarketJsonResultOfCompletedBiddingInfo {
  return (source ?? {}) as ApiMarketJsonResultOfCompletedBiddingInfo;
}
