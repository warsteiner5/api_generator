import { NicRegistriesSearch$Params } from '../../../swagger/fn/nic-registries/nic-registries-search';
import { NicRegistrySearchFilter } from '../../models/nic-registry-search-filter.interface';
import { adaptApiNicRegistrySearchFilterDto } from '../../adapters/toDto/api-nic-registry-search-filter-dto.adapter';

export interface NicRegistriesSearchParams {
  body?: NicRegistrySearchFilter;
}

export const nicRegistriesSearchParamsAdapter = {
  adapt(params?: NicRegistriesSearchParams): NicRegistriesSearch$Params {
    if (!params) {
      return {} as NicRegistriesSearch$Params;
    }
    return {
      body: adaptApiNicRegistrySearchFilterDto(params.body),
    };
  }
};
