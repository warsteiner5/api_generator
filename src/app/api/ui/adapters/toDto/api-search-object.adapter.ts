import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { ApiSearchObjectAltDto } from '../../../swagger/models/api-search-object';
import { adaptApiBaseFieldAltDto } from './api-base-field.adapter';
import { adaptApiSearchPagingObjectAltDto } from './api-search-paging-object.adapter';
import { adaptApiSortedFieldAltDto } from './api-sorted-field.adapter';

export function adaptApiSearchObjectAltDto(source?: SearchObjectAlt | null): ApiSearchObjectAltDto {
  return {
    Filtering: (source?.filtering ?? []).map((item) => adaptApiBaseFieldAltDto(item)),
    Paging: adaptApiSearchPagingObjectAltDto(source?.paging),
    Sorting: (source?.sorting ?? []).map((item) => adaptApiSortedFieldAltDto(item)),
  };
}
