import { MarketJsonResultOfKeyValuePair2Of } from '../../models/market-json-result-of-key-value-pair-2-of.interface';
import { ApiMarketJsonResultOfKeyValuePair2Of } from '../../../swagger/models/api-market-json-result-of-key-value-pair-2-of';

export function adaptApiMarketJsonResultOfKeyValuePair2Of(source?: MarketJsonResultOfKeyValuePair2Of | null): ApiMarketJsonResultOfKeyValuePair2Of {
  return (source ?? {}) as ApiMarketJsonResultOfKeyValuePair2Of;
}
