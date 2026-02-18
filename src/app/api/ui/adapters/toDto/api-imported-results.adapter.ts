import { ImportedResultsAlt } from '../../models/imported-results-alt.interface';
import { ApiImportedResultsAltDto } from '../../../swagger/models/api-imported-results';
import { adaptApiFilesStatusAltDto } from './api-files-status.adapter';

export function adaptApiImportedResultsAltDto(source?: ImportedResultsAlt | null): ApiImportedResultsAltDto {
  return {
    CountOfAddedElements: source?.countOfAddedElements,
    CountOfDeletedElements: source?.countOfDeletedElements,
    CountOfSkippedElements: source?.countOfSkippedElements,
    CountOfUpdatedElements: source?.countOfUpdatedElements,
    ListOfImportedFiles: (source?.listOfImportedFiles ?? []).map((item) => adaptApiFilesStatusAltDto(item)),
  };
}
