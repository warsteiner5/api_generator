import { FilterGetFilterModel$Params } from '../../../swagger/fn/filter/filter-get-filter-model';

export interface FilterGetFilterModelParams {
}

export const filterGetFilterModelParamsAdapter = {
  adapt(params?: FilterGetFilterModelParams): FilterGetFilterModel$Params {
    if (!params) {
      return {} as FilterGetFilterModel$Params;
    }
    return {
    };
  }
};
