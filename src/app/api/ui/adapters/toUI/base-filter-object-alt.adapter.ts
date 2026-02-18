import { ApiBaseFilterObjectAltDto } from '../../../swagger/models/api-base-filter-object';
import { BaseFilterObjectAlt } from '../../models/base-filter-object-alt.interface';

export function adaptBaseFilterObjectAltToUI(source?: ApiBaseFilterObjectAltDto | null): BaseFilterObjectAlt {
  return {
    itemsPerPage: source?.ItemsPerPage ?? 0,
    page: source?.Page ?? 0,
    sortDirection: source?.SortDirection ?? '',
    sortField: source?.SortField ?? '',
  };
}
