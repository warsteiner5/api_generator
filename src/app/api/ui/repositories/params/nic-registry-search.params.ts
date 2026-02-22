import { NicRegistrySearch$Params } from '../../../swagger/fn/nic-registry/nic-registry-search';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { apiSearchObjectAltDtoAdapter } from '../../adapters/models/api-search-object.adapter';

// @ts-ignore
export interface NicRegistrySearchParams {
  body?: SearchObjectAlt;
}

export function nicRegistrySearchAdapter(params?: NicRegistrySearchParams): NicRegistrySearch$Params {
  if (!params) {
    return {} as NicRegistrySearch$Params;
  }
  return {
      body: apiSearchObjectAltDtoAdapter(params.body),
  };
}
