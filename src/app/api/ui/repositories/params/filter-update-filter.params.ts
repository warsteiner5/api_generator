import { FilterUpdateFilter$Params } from '../../../swagger/fn/filter/filter-update-filter';
import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { apiSaveFilterObjectAltDtoAdapter } from '../../adapters/models/api-save-filter-object.adapter';

// @ts-ignore
export interface FilterUpdateFilterParams {
  id: number;
  body?: SaveFilterObjectAlt;
}

export function filterUpdateFilterAdapter(params?: FilterUpdateFilterParams): FilterUpdateFilter$Params {
  if (!params) {
    return {} as FilterUpdateFilter$Params;
  }
  return {
      id: params.id,
      body: apiSaveFilterObjectAltDtoAdapter(params.body),
  };
}
