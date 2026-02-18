/* tslint:disable */
/* eslint-disable */
import { ApiSearchObjectAltDto } from '../models/api-search-object';
import { ApiUpdateDataModelAltDto } from '../models/api-update-data-model';
export interface ApiBatchUpdateModelAltDto {
  ChangedData?: ApiUpdateDataModelAltDto | null;
  SearchObject?: ApiSearchObjectAltDto | null;
}
