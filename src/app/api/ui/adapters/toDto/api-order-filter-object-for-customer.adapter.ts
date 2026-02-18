import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { ApiOrderFilterObjectForCustomerAltDto } from '../../../swagger/models/api-order-filter-object-for-customer';

export function adaptApiOrderFilterObjectForCustomerAltDto(source?: OrderFilterObjectForCustomerAlt | null): ApiOrderFilterObjectForCustomerAltDto {
  return (source ?? {}) as ApiOrderFilterObjectForCustomerAltDto;
}
