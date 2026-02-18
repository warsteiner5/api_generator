/* tslint:disable */
/* eslint-disable */
import { ApiBaseFieldAltDto } from '../models/api-base-field';
import { ApiSearchPagingObjectAltDto } from '../models/api-search-paging-object';
import { ApiSortedFieldAltDto } from '../models/api-sorted-field';
export interface ApiSearchObjectAltDto {
  Filtering?: Array<ApiBaseFieldAltDto> | null;
  Paging?: ApiSearchPagingObjectAltDto | null;
  Sorting?: Array<ApiSortedFieldAltDto> | null;
}
