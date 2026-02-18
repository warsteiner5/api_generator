import { MarketJsonResultOfMarketJsonVoidResult } from '../../models/market-json-result-of-market-json-void-result.interface';
import { ApiMarketJsonResultOfMarketJsonVoidResult } from '../../../swagger/models/api-market-json-result-of-market-json-void-result';

export function adaptApiMarketJsonResultOfMarketJsonVoidResult(source?: MarketJsonResultOfMarketJsonVoidResult | null): ApiMarketJsonResultOfMarketJsonVoidResult {
  return (source ?? {}) as ApiMarketJsonResultOfMarketJsonVoidResult;
}
