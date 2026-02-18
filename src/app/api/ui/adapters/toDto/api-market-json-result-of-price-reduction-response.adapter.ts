import { MarketJsonResultOfPriceReductionResponse } from '../../models/market-json-result-of-price-reduction-response.interface';
import { ApiMarketJsonResultOfPriceReductionResponse } from '../../../swagger/models/api-market-json-result-of-price-reduction-response';

export function adaptApiMarketJsonResultOfPriceReductionResponse(source?: MarketJsonResultOfPriceReductionResponse | null): ApiMarketJsonResultOfPriceReductionResponse {
  return (source ?? {}) as ApiMarketJsonResultOfPriceReductionResponse;
}
