import { MarketJsonResultOfIReadOnlyCollectionOfRegistry } from '../../models/market-json-result-of-i-read-only-collection-of-registry.interface';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto } from '../../../swagger/models/api-market-json-result-of-i-read-only-collection-of-registry-dto';

export function adaptApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto(source?: MarketJsonResultOfIReadOnlyCollectionOfRegistry | null): ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto {
  return (source ?? {}) as ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto;
}
