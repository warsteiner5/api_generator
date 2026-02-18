import { ApiMarketJsonResultOfNicRegistryEntryDto } from '../../../swagger/models/api-market-json-result-of-nic-registry-entry-dto';
import { MarketJsonResultOfNicRegistryEntry } from '../../models/market-json-result-of-nic-registry-entry.interface';

export function adaptMarketJsonResultOfNicRegistryEntryToUI(source?: ApiMarketJsonResultOfNicRegistryEntryDto | null): MarketJsonResultOfNicRegistryEntry {
  return (source ?? {}) as MarketJsonResultOfNicRegistryEntry;
}
