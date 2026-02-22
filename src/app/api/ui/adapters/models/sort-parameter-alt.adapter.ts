import { ApiSortParameterAltDto } from '../../../swagger/models/api-sort-parameter';
import { SortParameterAlt } from '../../models/sort-parameter-alt.interface';
import { sortDirectionAltEnumAdapter } from '../enums/sort-direction-alt-enum.adapter';

export const sortParameterAltAdapter = (source?: ApiSortParameterAltDto | null): SortParameterAlt => {
  return {
    direction: source?.Direction === null ? undefined : sortDirectionAltEnumAdapter(source?.Direction),
    property: source?.Property,
  };
}
