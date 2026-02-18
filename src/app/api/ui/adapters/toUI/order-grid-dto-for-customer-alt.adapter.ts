import { ApiOrderGridDtoForCustomerAltDto } from '../../../swagger/models/api-order-grid-dto-for-customer';
import { OrderGridDtoForCustomerAlt } from '../../models/order-grid-dto-for-customer-alt.interface';

export function adaptOrderGridDtoForCustomerAltToUI(source?: ApiOrderGridDtoForCustomerAltDto | null): OrderGridDtoForCustomerAlt {
  return (source ?? {}) as OrderGridDtoForCustomerAlt;
}
