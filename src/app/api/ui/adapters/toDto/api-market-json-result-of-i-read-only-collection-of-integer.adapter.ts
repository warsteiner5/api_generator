import { MarketJsonResultOfIReadOnlyCollectionOfInteger } from '../../models/market-json-result-of-i-read-only-collection-of-integer.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfInteger } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-integer';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfInteger(source?: MarketJsonResultOfIReadOnlyCollectionOfInteger | null): ApiMarketJsonResultOfIReadOnlyCollectionOfInteger {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfInteger;
}
