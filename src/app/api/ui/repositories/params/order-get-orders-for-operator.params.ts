import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { OrderGetOrdersForOperator$Params } from '../../../swagger/fn/order/order-get-orders-for-operator';
import { apiOrderFilterObjectForCustomerAltDtoAdapter } from '../../adapters/models/api-order-filter-object-for-customer.adapter';

// @ts-ignore
export interface OrderGetOrdersForOperatorParams {
  body?: OrderFilterObjectForCustomerAlt;
}

export function orderGetOrdersForOperatorAdapter(params?: OrderGetOrdersForOperatorParams): OrderGetOrdersForOperator$Params {
  if (!params) {
    return {} as OrderGetOrdersForOperator$Params;
  }
  return {
      body: apiOrderFilterObjectForCustomerAltDtoAdapter(params.body),
  };
}
