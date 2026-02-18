import { ApiMarketJsonResultOfMarketJsonVoidResult } from '../../../swagger/models/api-market-json-result-of-market-json-void-result';
import { MarketJsonResultOfMarketJsonVoidResult } from '../../models/market-json-result-of-market-json-void-result.interface';

export function adaptMarketJsonResultOfMarketJsonVoidResultToUI(source?: ApiMarketJsonResultOfMarketJsonVoidResult | null): MarketJsonResultOfMarketJsonVoidResult {
  return (source ?? {}) as MarketJsonResultOfMarketJsonVoidResult;
}
