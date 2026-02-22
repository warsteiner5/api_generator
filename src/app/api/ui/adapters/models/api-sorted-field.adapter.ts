import { SortedFieldAlt } from '../../models/sorted-field-alt.interface';
import { ApiSortedFieldAltDto } from '../../../swagger/models/api-sorted-field';

export const apiSortedFieldAltDtoAdapter = (source?: SortedFieldAlt | null): ApiSortedFieldAltDto => {
  return {
    Direction: source?.direction,
    Field: source?.field,
  };
}
