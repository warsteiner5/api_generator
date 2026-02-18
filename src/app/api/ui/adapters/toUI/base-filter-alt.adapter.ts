import { ApiBaseFilterAltDto } from '../../../swagger/models/api-base-filter';
import { BaseFilterAlt } from '../../models/base-filter-alt.interface';

export function adaptBaseFilterAltToUI(source?: ApiBaseFilterAltDto | null): BaseFilterAlt {
  return {
    itemsPerPage: source?.ItemsPerPage ?? 0,
    page: source?.Page ?? 0,
    sortDirection: source?.SortDirection ?? '',
    sortField: source?.SortField ?? '',
  };
}
