import { MarketJsonResultOfIReadOnlyCollectionOfKsrValue } from '../../models/market-json-result-of-i-read-only-collection-of-ksr-value.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-ksr-value';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue(source?: MarketJsonResultOfIReadOnlyCollectionOfKsrValue | null): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue;
}
