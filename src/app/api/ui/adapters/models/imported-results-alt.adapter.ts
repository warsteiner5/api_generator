import { ApiImportedResultsAltDto } from '../../../swagger/models/api-imported-results';
import { ImportedResultsAlt } from '../../models/imported-results-alt.interface';
import { filesStatusAltAdapter } from './files-status-alt.adapter';

export const importedResultsAltAdapter = (source?: ApiImportedResultsAltDto | null): ImportedResultsAlt => {
  return {
    countOfAddedElements: source?.CountOfAddedElements,
    countOfDeletedElements: source?.CountOfDeletedElements,
    countOfSkippedElements: source?.CountOfSkippedElements,
    countOfUpdatedElements: source?.CountOfUpdatedElements,
    listOfImportedFiles: source?.ListOfImportedFiles?.map((item) => filesStatusAltAdapter(item)),
  };
}
