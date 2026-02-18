import { ApiSortingParamAltDto } from '../../../swagger/models/api-sorting-param';
import { SortingParamAlt } from '../../models/sorting-param-alt.interface';

export function adaptSortingParamAltToUI(source?: ApiSortingParamAltDto | null): SortingParamAlt {
  return {
    sortDirection: source?.SortDirection ?? '',
    sortField: source?.SortField ?? '',
  };
}
