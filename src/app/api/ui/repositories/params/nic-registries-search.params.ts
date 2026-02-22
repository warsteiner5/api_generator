import { NicRegistriesSearch$Params } from '../../../swagger/fn/nic-registries/nic-registries-search';
import { NicRegistrySearchFilter } from '../../models/nic-registry-search-filter.interface';
import { apiNicRegistrySearchFilterDtoAdapter } from '../../adapters/models/api-nic-registry-search-filter-dto.adapter';

// @ts-ignore
export interface NicRegistriesSearchParams {
  body?: NicRegistrySearchFilter;
}

export function nicRegistriesSearchAdapter(params?: NicRegistriesSearchParams): NicRegistriesSearch$Params {
  if (!params) {
    return {} as NicRegistriesSearch$Params;
  }
  return {
      body: apiNicRegistrySearchFilterDtoAdapter(params.body),
  };
}
