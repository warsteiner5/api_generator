import { ApiSearchPagingObjectAltDto } from '../../../swagger/models/api-search-paging-object';
import { SearchPagingObjectAlt } from '../../models/search-paging-object-alt.interface';

export const searchPagingObjectAltAdapter = (source?: ApiSearchPagingObjectAltDto | null): SearchPagingObjectAlt => {
  return {
    itemsPerPage: source?.ItemsPerPage,
    page: source?.Page,
  };
}
