import { MarketJsonResultOfTradePublishResult } from '../../models/market-json-result-of-trade-publish-result.interface';
import { ApiMarketJsonResultOfTradePublishResult } from '../../../swagger/models/api-market-json-result-of-trade-publish-result';

export function adaptApiMarketJsonResultOfTradePublishResult(source?: MarketJsonResultOfTradePublishResult | null): ApiMarketJsonResultOfTradePublishResult {
  return (source ?? {}) as ApiMarketJsonResultOfTradePublishResult;
}
