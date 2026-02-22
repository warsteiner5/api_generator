import { NicRegistrySearchFilter } from '../../models/nic-registry-search-filter.interface';
import { ApiNicRegistrySearchFilterDto } from '../../../swagger/models/api-nic-registry-search-filter-dto';

export const apiNicRegistrySearchFilterDtoAdapter = (source?: NicRegistrySearchFilter | null): ApiNicRegistrySearchFilterDto => {
  return (source ?? {}) as ApiNicRegistrySearchFilterDto;
}
