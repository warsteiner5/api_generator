import { ApiNicRegistrySearchFilterDto } from '../../../swagger/models/api-nic-registry-search-filter-dto';
import { NicRegistrySearchFilter } from '../../models/nic-registry-search-filter.interface';

export const nicRegistrySearchFilterAdapter = (source?: ApiNicRegistrySearchFilterDto | null): NicRegistrySearchFilter => {
  return (source ?? {}) as NicRegistrySearchFilter;
}
