import { MarketJsonResultOfListOfOkved2Value } from '../../models/market-json-result-of-list-of-okved-2-value.interface';
import { ApiMarketJsonResultOfListOfOkved2Value } from '../../../swagger/models/api-market-json-result-of-list-of-okved-2-value';

export function adaptApiMarketJsonResultOfListOfOkved2Value(source?: MarketJsonResultOfListOfOkved2Value | null): ApiMarketJsonResultOfListOfOkved2Value {
  return (source ?? {}) as ApiMarketJsonResultOfListOfOkved2Value;
}
