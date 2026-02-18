import { NicRegistrySearch$Params } from '../../../swagger/fn/nic-registry/nic-registry-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { adaptApiSearchObjectAltDto } from '../../adapters/toDto/api-search-object.adapter';

export interface NicRegistrySearchParams {
  body?: SearchObjectAlt;
}

export const nicRegistrySearchParamsAdapter = {
  adapt(params?: NicRegistrySearchParams): NicRegistrySearch$Params {
    if (!params) {
      return {} as NicRegistrySearch$Params;
    }
    return {
      body: adaptApiSearchObjectAltDto(params.body),
    };
  }
};
