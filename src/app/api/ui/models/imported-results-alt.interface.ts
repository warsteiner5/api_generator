import { FilesStatusAlt } from './files-status-alt.interface';

// @ts-ignore
export interface ImportedResultsAlt {
  countOfAddedElements: number;
  countOfDeletedElements: number;
  countOfSkippedElements: number;
  countOfUpdatedElements: number;
  listOfImportedFiles: FilesStatusAlt[];
}
