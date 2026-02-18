import { SortingParamAlt } from '../../models/sorting-param-alt.interface';
import { ApiSortingParamAltDto } from '../../../swagger/models/api-sorting-param';

export function adaptApiSortingParamAltDto(source?: SortingParamAlt | null): ApiSortingParamAltDto {
  return {
    SortDirection: source?.sortDirection,
    SortField: source?.sortField,
  };
}
