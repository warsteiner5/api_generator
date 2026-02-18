import { MarketJsonResultOfIEnumerableOfInteger } from '../../models/market-json-result-of-i-enumerable-of-integer.interface';
import { ApiMarketJsonResultOfIEnumerableOfInteger } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-integer';

export function adaptApiMarketJsonResultOfIEnumerableOfInteger(source?: MarketJsonResultOfIEnumerableOfInteger | null): ApiMarketJsonResultOfIEnumerableOfInteger {
  return (source ?? {}) as ApiMarketJsonResultOfIEnumerableOfInteger;
}
