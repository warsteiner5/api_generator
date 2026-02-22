import { FilterFindMyFilledFilters$Params } from '../../../swagger/fn/filter/filter-find-my-filled-filters';
import { FindParamsAlt } from '../../models/find-params-alt.interface';
import { apiFindParamsAltDtoAdapter } from '../../adapters/models/api-find-params.adapter';

// @ts-ignore
export interface FilterFindMyFilledFiltersParams {
  body?: FindParamsAlt;
}

export function filterFindMyFilledFiltersAdapter(params?: FilterFindMyFilledFiltersParams): FilterFindMyFilledFilters$Params {
  if (!params) {
    return {} as FilterFindMyFilledFilters$Params;
  }
  return {
      body: apiFindParamsAltDtoAdapter(params.body),
  };
}
