import { OrderFilterObjectForCustomerAlt } from '../../models/order-filter-object-for-customer-alt.interface';
import { OrderGetOrdersForCustomer$Params } from '../../../swagger/fn/order/order-get-orders-for-customer';
import { adaptApiOrderFilterObjectForCustomerAltDto } from '../../adapters/toDto/api-order-filter-object-for-customer.adapter';

export interface OrderGetOrdersForCustomerParams {
  body?: OrderFilterObjectForCustomerAlt;
}

export const orderGetOrdersForCustomerParamsAdapter = {
  adapt(params?: OrderGetOrdersForCustomerParams): OrderGetOrdersForCustomer$Params {
    if (!params) {
      return {} as OrderGetOrdersForCustomer$Params;
    }
    return {
      body: adaptApiOrderFilterObjectForCustomerAltDto(params.body),
    };
  }
};
