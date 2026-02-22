import { OrderAlt } from '../../models/order-alt.interface';
import { OrdersCreate$Params } from '../../../swagger/fn/orders/orders-create';
import { apiOrderAltDtoAdapter } from '../../adapters/models/api-order.adapter';

// @ts-ignore
export interface OrdersCreateParams {
  body?: OrderAlt;
}

export function ordersCreateAdapter(params?: OrdersCreateParams): OrdersCreate$Params {
  if (!params) {
    return {} as OrdersCreate$Params;
  }
  return {
      body: apiOrderAltDtoAdapter(params.body),
  };
}
