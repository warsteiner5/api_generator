import { ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-registry-dto';
import { MarketJsonResultOfIReadOnlyCollectionOfRegistry } from '../../models/market-json-result-of-i-read-only-collection-of-registry.interface';

export function adaptMarketJsonResultOfIReadOnlyCollectionOfRegistryToUI(source?: ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto | null): MarketJsonResultOfIReadOnlyCollectionOfRegistry {
  return (source ?? {}) as MarketJsonResultOfIReadOnlyCollectionOfRegistry;
}
