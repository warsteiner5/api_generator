import { FilterGetFilterByGuid$Params } from '../../../swagger/fn/filter/filter-get-filter-by-guid';

// @ts-ignore
export interface FilterGetFilterByGuidParams {
  guid: string;
}

export function filterGetFilterByGuidAdapter(params?: FilterGetFilterByGuidParams): FilterGetFilterByGuid$Params {
  if (!params) {
    return {} as FilterGetFilterByGuid$Params;
  }
  return {
      guid: params.guid,
  };
}
