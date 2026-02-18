import { FilterDelete$Params } from '../../../swagger/fn/filter/filter-delete';

export interface FilterDeleteParams {
  id: number;
}

export const filterDeleteParamsAdapter = {
  adapt(params?: FilterDeleteParams): FilterDelete$Params {
    if (!params) {
      return {} as FilterDelete$Params;
    }
    return {
      id: params.id,
    };
  }
};
