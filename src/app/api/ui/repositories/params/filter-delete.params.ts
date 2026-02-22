import { FilterDelete$Params } from '../../../swagger/fn/filter/filter-delete';

// @ts-ignore
export interface FilterDeleteParams {
  id: number;
}

export function filterDeleteAdapter(params?: FilterDeleteParams): FilterDelete$Params {
  if (!params) {
    return {} as FilterDelete$Params;
  }
  return {
      id: params.id,
  };
}
