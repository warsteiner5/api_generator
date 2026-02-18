import { FilterFindMyFilledFilters$Params } from '../../../swagger/fn/filter/filter-find-my-filled-filters';
import { FindParamsAlt } from '../../models/find-params-alt.interface';
import { adaptApiFindParamsAltDto } from '../../adapters/toDto/api-find-params.adapter';

export interface FilterFindMyFilledFiltersParams {
  body?: FindParamsAlt;
}

export const filterFindMyFilledFiltersParamsAdapter = {
  adapt(params?: FilterFindMyFilledFiltersParams): FilterFindMyFilledFilters$Params {
    if (!params) {
      return {} as FilterFindMyFilledFilters$Params;
    }
    return {
      body: adaptApiFindParamsAltDto(params.body),
    };
  }
};
