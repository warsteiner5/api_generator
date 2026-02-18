import { ApiMarketJsonResultOfTradePublishResult } from '../../../swagger/models/api-market-json-result-of-trade-publish-result';
import { MarketJsonResultOfTradePublishResult } from '../../models/market-json-result-of-trade-publish-result.interface';

export function adaptMarketJsonResultOfTradePublishResultToUI(source?: ApiMarketJsonResultOfTradePublishResult | null): MarketJsonResultOfTradePublishResult {
  return (source ?? {}) as MarketJsonResultOfTradePublishResult;
}
