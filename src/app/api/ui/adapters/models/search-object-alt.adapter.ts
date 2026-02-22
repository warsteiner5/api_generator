import { ApiSearchObjectAltDto } from '../../../swagger/models/api-search-object';
import { SearchObjectAlt } from '../../models/search-object-alt.interface';
import { baseFieldAltAdapter } from './base-field-alt.adapter';
import { searchPagingObjectAltAdapter } from './search-paging-object-alt.adapter';
import { sortedFieldAltAdapter } from './sorted-field-alt.adapter';

export const searchObjectAltAdapter = (source?: ApiSearchObjectAltDto | null): SearchObjectAlt => {
  return {
    filtering: source?.Filtering?.map((item) => baseFieldAltAdapter(item)),
    paging: source?.Paging === null ? undefined : searchPagingObjectAltAdapter(source?.Paging),
    sorting: source?.Sorting?.map((item) => sortedFieldAltAdapter(item)),
  };
}
