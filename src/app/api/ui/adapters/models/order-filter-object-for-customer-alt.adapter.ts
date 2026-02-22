import { ApiOrderFilterObjectForCustomerAltDto } from '../../../swagger/models/api-order-filter-object-for-customer';
import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';

export const orderFilterObjectForCustomerAltAdapter = (source?: ApiOrderFilterObjectForCustomerAltDto | null): OrderFilterObjectForCustomerAlt => {
  return (source ?? {}) as OrderFilterObjectForCustomerAlt;
}
