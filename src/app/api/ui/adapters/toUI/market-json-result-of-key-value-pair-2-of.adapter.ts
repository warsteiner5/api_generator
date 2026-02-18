import { ApiMarketJsonResultOfKeyValuePair2Of } from '../../../swagger/models/api-market-json-result-of-key-value-pair-2-of';
import { MarketJsonResultOfKeyValuePair2Of } from '../../models/market-json-result-of-key-value-pair-2-of.interface';

export function adaptMarketJsonResultOfKeyValuePair2OfToUI(source?: ApiMarketJsonResultOfKeyValuePair2Of | null): MarketJsonResultOfKeyValuePair2Of {
  return (source ?? {}) as MarketJsonResultOfKeyValuePair2Of;
}
