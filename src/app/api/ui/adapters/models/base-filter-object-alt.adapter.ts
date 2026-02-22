import { ApiBaseFilterObjectAltDto } from '../../../swagger/models/api-base-filter-object';
import { BaseFilterObjectAlt } from '../../models/base-filter-object-alt.interface';

export const baseFilterObjectAltAdapter = (source?: ApiBaseFilterObjectAltDto | null): BaseFilterObjectAlt => {
  return {
    itemsPerPage: source?.ItemsPerPage,
    page: source?.Page,
    sortDirection: source?.SortDirection,
    sortField: source?.SortField,
  };
}
