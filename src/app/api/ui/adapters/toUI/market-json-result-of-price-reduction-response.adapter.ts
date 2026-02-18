import { ApiMarketJsonResultOfPriceReductionResponse } from '../../../swagger/models/api-market-json-result-of-price-reduction-response';
import { MarketJsonResultOfPriceReductionResponse } from '../../models/market-json-result-of-price-reduction-response.interface';

export function adaptMarketJsonResultOfPriceReductionResponseToUI(source?: ApiMarketJsonResultOfPriceReductionResponse | null): MarketJsonResultOfPriceReductionResponse {
  return (source ?? {}) as MarketJsonResultOfPriceReductionResponse;
}
