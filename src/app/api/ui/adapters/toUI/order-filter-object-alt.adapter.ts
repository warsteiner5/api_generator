import { ApiOrderFilterObjectAltDto } from '../../../swagger/models/api-order-filter-object';
import { OrderFilterObjectAlt } from '../../models/order-filter-object-alt.interface';

export function adaptOrderFilterObjectAltToUI(source?: ApiOrderFilterObjectAltDto | null): OrderFilterObjectAlt {
  return (source ?? {}) as OrderFilterObjectAlt;
}
