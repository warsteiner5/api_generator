import { ApiSortedFieldAltDto } from '../../../swagger/models/api-sorted-field';
import { SortedFieldAlt } from '../../models/sorted-field-alt.interface';

export const sortedFieldAltAdapter = (source?: ApiSortedFieldAltDto | null): SortedFieldAlt => {
  return {
    direction: source?.Direction,
    field: source?.Field,
  };
}
