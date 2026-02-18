import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { OrderGetOrdersForOperator$Params } from '../../../swagger/fn/order/order-get-orders-for-operator';
import { adaptApiOrderFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-order-filter-object-for-customer.adapter';

export interface OrderGetOrdersForOperatorParams {
  body?: OrderFilterObjectForCustomerAlt;
}

export const orderGetOrdersForOperatorParamsAdapter = {
  adapt(params?: OrderGetOrdersForOperatorParams): OrderGetOrdersForOperator$Params {
    if (!params) {
      return {} as OrderGetOrdersForOperator$Params;
    }
    return {
      body: adaptApiOrderFilterObjectForCustomerAltDto(params.body),
    };
  }
};
