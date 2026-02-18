/* tslint:disable */
/* eslint-disable */
import { ApiFilesStatusAltDto } from '../models/api-files-status';
export interface ApiImportedResultsAltDto {
  CountOfAddedElements?: number;
  CountOfDeletedElements?: number;
  CountOfSkippedElements?: number;
  CountOfUpdatedElements?: number;
  ListOfImportedFiles?: Array<ApiFilesStatusAltDto> | null;
}
