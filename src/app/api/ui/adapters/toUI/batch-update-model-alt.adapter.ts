import { ApiBatchUpdateModelAltDto } from '../../../swagger/models/api-batch-update-model';
import { BatchUpdateModelAlt } from '../../models/batch-update-model-alt.interface';
import { adaptSearchObjectAltToUI } from './search-object-alt.adapter';
import { adaptUpdateDataModelAltToUI } from './update-data-model-alt.adapter';

export function adaptBatchUpdateModelAltToUI(source?: ApiBatchUpdateModelAltDto | null): BatchUpdateModelAlt {
  return {
    changedData: adaptUpdateDataModelAltToUI(source?.ChangedData),
    searchObject: adaptSearchObjectAltToUI(source?.SearchObject),
  };
}
