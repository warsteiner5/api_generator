import { OrderFilterObjectAlt } from '../../models/order-filter-object-alt.interface';
import { ApiOrderFilterObjectAltDto } from '../../../swagger/models/api-order-filter-object';

export function adaptApiOrderFilterObjectAltDto(source?: OrderFilterObjectAlt | null): ApiOrderFilterObjectAltDto {
  return (source ?? {}) as ApiOrderFilterObjectAltDto;
}
