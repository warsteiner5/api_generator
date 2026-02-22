import { BaseFilterObjectAlt } from '../../models/base-filter-object-alt.interface';
import { ApiBaseFilterObjectAltDto } from '../../../swagger/models/api-base-filter-object';

export const apiBaseFilterObjectAltDtoAdapter = (source?: BaseFilterObjectAlt | null): ApiBaseFilterObjectAltDto => {
  return {
    ItemsPerPage: source?.itemsPerPage,
    Page: source?.page,
    SortDirection: source?.sortDirection,
    SortField: source?.sortField,
  };
}
