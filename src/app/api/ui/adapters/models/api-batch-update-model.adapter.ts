import { BatchUpdateModelAlt } from '../../models/batch-update-model-alt.interface';
import { ApiBatchUpdateModelAltDto } from '../../../swagger/models/api-batch-update-model';
import { apiSearchObjectAltDtoAdapter } from './api-search-object.adapter';
import { apiUpdateDataModelAltDtoAdapter } from './api-update-data-model.adapter';

export const apiBatchUpdateModelAltDtoAdapter = (source?: BatchUpdateModelAlt | null): ApiBatchUpdateModelAltDto => {
  return {
    ChangedData: source?.changedData === null ? undefined : apiUpdateDataModelAltDtoAdapter(source?.changedData),
    SearchObject: source?.searchObject === null ? undefined : apiSearchObjectAltDtoAdapter(source?.searchObject),
  };
}
