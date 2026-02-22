import { FilterSaveFilter$Params } from '../../../swagger/fn/filter/filter-save-filter';
import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { apiSaveFilterObjectAltDtoAdapter } from '../../adapters/models/api-save-filter-object.adapter';

// @ts-ignore
export interface FilterSaveFilterParams {
  body?: SaveFilterObjectAlt;
}

export function filterSaveFilterAdapter(params?: FilterSaveFilterParams): FilterSaveFilter$Params {
  if (!params) {
    return {} as FilterSaveFilter$Params;
  }
  return {
      body: apiSaveFilterObjectAltDtoAdapter(params.body),
  };
}
