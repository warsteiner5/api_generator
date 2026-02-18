import { ApiOrderFilterObjectForCustomerAltDto } from '../../../swagger/models/api-order-filter-object-for-customer';
import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';

export function adaptOrderFilterObjectForCustomerAltToUI(source?: ApiOrderFilterObjectForCustomerAltDto | null): OrderFilterObjectForCustomerAlt {
  return (source ?? {}) as OrderFilterObjectForCustomerAlt;
}
