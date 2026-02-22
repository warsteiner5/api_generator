import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { ApiSearchObjectAltDto } from '../../../swagger/models/api-search-object';
import { apiBaseFieldAltDtoAdapter } from './api-base-field.adapter';
import { apiSearchPagingObjectAltDtoAdapter } from './api-search-paging-object.adapter';
import { apiSortedFieldAltDtoAdapter } from './api-sorted-field.adapter';

export const apiSearchObjectAltDtoAdapter = (source?: SearchObjectAlt | null): ApiSearchObjectAltDto => {
  return {
    Filtering: source?.filtering?.map((item) => apiBaseFieldAltDtoAdapter(item)),
    Paging: source?.paging === null ? undefined : apiSearchPagingObjectAltDtoAdapter(source?.paging),
    Sorting: source?.sorting?.map((item) => apiSortedFieldAltDtoAdapter(item)),
  };
}
