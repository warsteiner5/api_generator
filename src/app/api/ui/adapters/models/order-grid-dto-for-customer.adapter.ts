import { ApiOrderGridDtoForCustomer } from '../../../swagger/models/api-order-grid-dto-for-customer';
import { OrderGridDtoForCustomer } from '../../models/order-grid-dto-for-customer.interface';

export const orderGridDtoForCustomerAdapter = (source?: ApiOrderGridDtoForCustomer | null): OrderGridDtoForCustomer => {
  return (source ?? {}) as OrderGridDtoForCustomer;
}
