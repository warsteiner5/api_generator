import { BatchUpdateModelAlt } from '../../models/batch-update-model-alt.interface';
import { ApiBatchUpdateModelAltDto } from '../../../swagger/models/api-batch-update-model';
import { adaptApiSearchObjectAltDto } from './api-search-object.adapter';
import { adaptApiUpdateDataModelAltDto } from './api-update-data-model.adapter';

export function adaptApiBatchUpdateModelAltDto(source?: BatchUpdateModelAlt | null): ApiBatchUpdateModelAltDto {
  return {
    ChangedData: adaptApiUpdateDataModelAltDto(source?.changedData),
    SearchObject: adaptApiSearchObjectAltDto(source?.searchObject),
  };
}
