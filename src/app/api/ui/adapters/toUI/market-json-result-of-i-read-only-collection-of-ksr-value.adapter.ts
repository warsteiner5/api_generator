import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-ksr-value';
import { MarketJsonResultOfIReadOnlyCollectionOfKsrValue } from '../../models/market-json-result-of-i-read-only-collection-of-ksr-value.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfKsrValueToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValue | null): MarketJsonResultOfIReadOnlyCollectionOfKsrValue {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfKsrValue;
}
