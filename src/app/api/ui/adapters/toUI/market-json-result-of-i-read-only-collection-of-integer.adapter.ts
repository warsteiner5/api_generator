import { ApiMarketJsonResultOfIReadOnlyCollectionOfInteger } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-integer';
import { MarketJsonResultOfIReadOnlyCollectionOfInteger } from '../../models/market-json-result-of-i-read-only-collection-of-integer.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfIntegerToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfInteger | null): MarketJsonResultOfIReadOnlyCollectionOfInteger {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfInteger;
}
