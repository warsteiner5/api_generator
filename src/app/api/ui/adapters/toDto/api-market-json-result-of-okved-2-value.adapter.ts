import { MarketJsonResultOfOkved2Value } from '../../models/market-json-result-of-okved-2-value.interface';
import { ApiMarketJsonResultOfOkved2Value } from '../../../swagger/models/api-market-json-result-of-okved-2-value';

export function adaptApiMarketJsonResultOfOkved2Value(source?: MarketJsonResultOfOkved2Value | null): ApiMarketJsonResultOfOkved2Value {
  return (source ?? {}) as ApiMarketJsonResultOfOkved2Value;
}
