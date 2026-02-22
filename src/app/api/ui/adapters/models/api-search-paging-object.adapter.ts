import { SearchPagingObjectAlt } from '../../models/search-paging-object-alt.interface';
import { ApiSearchPagingObjectAltDto } from '../../../swagger/models/api-search-paging-object';

export const apiSearchPagingObjectAltDtoAdapter = (source?: SearchPagingObjectAlt | null): ApiSearchPagingObjectAltDto => {
  return {
    ItemsPerPage: source?.itemsPerPage,
    Page: source?.page,
  };
}
