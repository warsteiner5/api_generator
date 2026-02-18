import { ApiMarketJsonResultOfIEnumerableOfInteger } from '../../../swagger/models/api-market-json-result-of-i-enumerable-of-integer';
import { MarketJsonResultOfIEnumerableOfInteger } from '../../models/market-json-result-of-i-enumerable-of-integer.interface';

export function adaptMarketJsonResultOfIEnumerableOfIntegerToUI(source?: ApiMarketJsonResultOfIEnumerableOfInteger | null): MarketJsonResultOfIEnumerableOfInteger {
  return (source ?? {}) as MarketJsonResultOfIEnumerableOfInteger;
}
