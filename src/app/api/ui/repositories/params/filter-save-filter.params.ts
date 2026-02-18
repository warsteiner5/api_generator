import { FilterSaveFilter$Params } from '../../../swagger/fn/filter/filter-save-filter';
import { SaveFilterObjectAlt } from '../../models/save-filter-object-alt.interface';
import { adaptApiSaveFilterObjectAltDto } from '../../adapters/toDto/api-save-filter-object.adapter';

export interface FilterSaveFilterParams {
  body?: SaveFilterObjectAlt;
}

export const filterSaveFilterParamsAdapter = {
  adapt(params?: FilterSaveFilterParams): FilterSaveFilter$Params {
    if (!params) {
      return {} as FilterSaveFilter$Params;
    }
    return {
      body: adaptApiSaveFilterObjectAltDto(params.body),
    };
  }
};
