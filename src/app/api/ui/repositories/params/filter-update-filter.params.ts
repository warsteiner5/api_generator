import { FilterUpdateFilter$Params } from '../../../swagger/fn/filter/filter-update-filter';
import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { adaptApiSaveFilterObjectAltDto } from '../../adapters/toDto/api-save-filter-object.adapter';

export interface FilterUpdateFilterParams {
  id: number;
  body?: SaveFilterObjectAlt;
}

export const filterUpdateFilterParamsAdapter = {
  adapt(params?: FilterUpdateFilterParams): FilterUpdateFilter$Params {
    if (!params) {
      return {} as FilterUpdateFilter$Params;
    }
    return {
      id: params.id,
      body: adaptApiSaveFilterObjectAltDto(params.body),
    };
  }
};
