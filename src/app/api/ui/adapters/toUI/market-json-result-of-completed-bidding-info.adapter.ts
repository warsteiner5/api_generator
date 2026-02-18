import { ApiMarketJsonResultOfCompletedBiddingInfo } from '../../../swagger/models/api-market-json-result-of-completed-bidding-info';
import { MarketJsonResultOfCompletedBiddingInfo } from '../../models/market-json-result-of-completed-bidding-info.interface';

export function adaptMarketJsonResultOfCompletedBiddingInfoToUI(source?: ApiMarketJsonResultOfCompletedBiddingInfo | null): MarketJsonResultOfCompletedBiddingInfo {
  return (source ?? {}) as MarketJsonResultOfCompletedBiddingInfo;
}
