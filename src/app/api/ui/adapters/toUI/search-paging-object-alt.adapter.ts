import { ApiSearchPagingObjectAltDto } from '../../../swagger/models/api-search-paging-object';
import { SearchPagingObjectAlt } from '../../models/search-paging-object-alt.interface';

export function adaptSearchPagingObjectAltToUI(source?: ApiSearchPagingObjectAltDto | null): SearchPagingObjectAlt {
  return {
    itemsPerPage: source?.ItemsPerPage ?? 0,
    page: source?.Page ?? 0,
  };
}
