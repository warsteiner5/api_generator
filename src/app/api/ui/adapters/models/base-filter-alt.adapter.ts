import { ApiBaseFilterAltDto } from '../../../swagger/models/api-base-filter';
import { BaseFilterAlt } from '../../models/base-filter-alt.interface';

export const baseFilterAltAdapter = (source?: ApiBaseFilterAltDto | null): BaseFilterAlt => {
  return {
    itemsPerPage: source?.ItemsPerPage,
    page: source?.Page,
    sortDirection: source?.SortDirection,
    sortField: source?.SortField,
  };
}
