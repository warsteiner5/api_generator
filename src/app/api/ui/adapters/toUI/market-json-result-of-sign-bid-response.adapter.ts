import { ApiMarketJsonResultOfSignBidResponse } from '../../../swagger/models/api-market-json-result-of-sign-bid-response';
import { MarketJsonResultOfSignBidResponse } from '../../models/market-json-result-of-sign-bid-response.interface';

export function adaptMarketJsonResultOfSignBidResponseToUI(source?: ApiMarketJsonResultOfSignBidResponse | null): MarketJsonResultOfSignBidResponse {
  return (source ?? {}) as MarketJsonResultOfSignBidResponse;
}
