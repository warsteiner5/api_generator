import { OrderAlt } from '../../models/order-alt.interface';
import { OrdersCreate$Params } from '../../../swagger/fn/orders/orders-create';
import { adaptApiOrderAltDto } from '../../adapters/toDto/api-order.adapter';

export interface OrdersCreateParams {
  body?: OrderAlt;
}

export const ordersCreateParamsAdapter = {
  adapt(params?: OrdersCreateParams): OrdersCreate$Params {
    if (!params) {
      return {} as OrdersCreate$Params;
    }
    return {
      body: adaptApiOrderAltDto(params.body),
    };
  }
};
