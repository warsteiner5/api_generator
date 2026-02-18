import { ApiImportedResultsAltDto } from '../../../swagger/models/api-imported-results';
import { ImportedResultsAlt } from '../../models/imported-results-alt.interface';
import { adaptFilesStatusAltToUI } from './files-status-alt.adapter';

export function adaptImportedResultsAltToUI(source?: ApiImportedResultsAltDto | null): ImportedResultsAlt {
  return {
    countOfAddedElements: source?.CountOfAddedElements ?? 0,
    countOfDeletedElements: source?.CountOfDeletedElements ?? 0,
    countOfSkippedElements: source?.CountOfSkippedElements ?? 0,
    countOfUpdatedElements: source?.CountOfUpdatedElements ?? 0,
    listOfImportedFiles: (source?.ListOfImportedFiles ?? []).map((item) => adaptFilesStatusAltToUI(item)),
  };
}
