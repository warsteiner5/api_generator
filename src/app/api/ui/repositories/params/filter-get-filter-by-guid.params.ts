import { FilterGetFilterByGuid$Params } from '../../../swagger/fn/filter/filter-get-filter-by-guid';

export interface FilterGetFilterByGuidParams {
  guid: string;
}

export const filterGetFilterByGuidParamsAdapter = {
  adapt(params?: FilterGetFilterByGuidParams): FilterGetFilterByGuid$Params {
    if (!params) {
      return {} as FilterGetFilterByGuid$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
