import { ApiSortParameterAltDto } from '../../../swagger/models/api-sort-parameter';
import { SortParameterAlt } from '../../models/sort-parameter-alt.interface';
import { adaptSortDirectionAltEnumToUI } from './sort-direction-alt-enum.adapter';

export function adaptSortParameterAltToUI(source?: ApiSortParameterAltDto | null): SortParameterAlt {
  return {
    direction: adaptSortDirectionAltEnumToUI(source?.Direction),
    property: source?.Property ?? '',
  };
}
