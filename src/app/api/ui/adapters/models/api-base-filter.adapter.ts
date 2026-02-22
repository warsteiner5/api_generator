import { BaseFilterAlt } from '../../models/base-filter-alt.interface';
import { ApiBaseFilterAltDto } from '../../../swagger/models/api-base-filter';

export const apiBaseFilterAltDtoAdapter = (source?: BaseFilterAlt | null): ApiBaseFilterAltDto => {
  return {
    ItemsPerPage: source?.itemsPerPage,
    Page: source?.page,
    SortDirection: source?.sortDirection,
    SortField: source?.sortField,
  };
}
