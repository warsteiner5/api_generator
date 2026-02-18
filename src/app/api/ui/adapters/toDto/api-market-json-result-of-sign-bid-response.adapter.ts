import { MarketJsonResultOfSignBidResponse } from '../../models/market-json-result-of-sign-bid-response.interface';
import { ApiMarketJsonResultOfSignBidResponse } from '../../../swagger/models/api-market-json-result-of-sign-bid-response';

export function adaptApiMarketJsonResultOfSignBidResponse(source?: MarketJsonResultOfSignBidResponse | null): ApiMarketJsonResultOfSignBidResponse {
  return (source ?? {}) as ApiMarketJsonResultOfSignBidResponse;
}
