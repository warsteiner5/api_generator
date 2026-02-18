import { MarketJsonResultOfNicRegistryEntry } from '../../models/market-json-result-of-nic-registry-entry.interface';
import { ApiMarketJsonResultOfNicRegistryEntryDto } from '../../../swagger/models/api-market-json-result-of-nic-registry-entry-dto';

export function adaptApiMarketJsonResultOfNicRegistryEntryDto(source?: MarketJsonResultOfNicRegistryEntry | null): ApiMarketJsonResultOfNicRegistryEntryDto {
  return (source ?? {}) as ApiMarketJsonResultOfNicRegistryEntryDto;
}
