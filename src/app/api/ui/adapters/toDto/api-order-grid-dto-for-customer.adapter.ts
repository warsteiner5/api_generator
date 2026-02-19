import { OrderGridDtoForCustomer } from '../../models/order-grid-dto-for-customer.interface';
import { ApiOrderGridDtoForCustomer } from '../../../swagger/models/api-order-grid-dto-for-customer';

export function adaptApiOrderGridDtoForCustomer(source?: OrderGridDtoForCustomer | null): ApiOrderGridDtoForCustomer {
  return (source ?? {}) as ApiOrderGridDtoForCustomer;
}
