import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { OrderGetOrdersForCustomer$Params } from '../../../swagger/fn/order/order-get-orders-for-customer';
import { apiOrderFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-order-filter-object-for-customer.adapter';

// @ts-ignore
export interface OrderGetOrdersForCustomerParams {
  body?: OrderFilterObjectForCustomerAlt;
}

export function orderGetOrdersForCustomerAdapter(params?: OrderGetOrdersForCustomerParams): OrderGetOrdersForCustomer$Params {
  if (!params) {
    return {} as OrderGetOrdersForCustomer$Params;
  }
  return {
      body: apiOrderFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
