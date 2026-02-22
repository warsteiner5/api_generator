import { ApiBatchUpdateModelAltDto } from '../../../swagger/models/api-batch-update-model';
import { BatchUpdateModelAlt } from '../../models/batch-update-model-alt.interface';
import { searchObjectAltAdapter } from './search-object-alt.adapter';
import { updateDataModelAltAdapter } from './update-data-model-alt.adapter';

export const batchUpdateModelAltAdapter = (source?: ApiBatchUpdateModelAltDto | null): BatchUpdateModelAlt => {
  return {
    changedData: source?.ChangedData === null ? undefined : updateDataModelAltAdapter(source?.ChangedData),
    searchObject: source?.SearchObject === null ? undefined : searchObjectAltAdapter(source?.SearchObject),
  };
}
