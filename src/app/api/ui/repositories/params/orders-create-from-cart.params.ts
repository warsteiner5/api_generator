import { OrderFromCartAlt } from '../../models/order-from-cart-alt.interface';
import { OrdersCreateFromCart$Params } from '../../../swagger/fn/orders/orders-create-from-cart';
import { apiOrderFromCartAltDtoAdapter } from '../../adapters/models/api-order-from-cart.adapter';

// @ts-ignore
export interface OrdersCreateFromCartParams {
  body?: OrderFromCartAlt;
}

export function ordersCreateFromCartAdapter(params?: OrdersCreateFromCartParams): OrdersCreateFromCart$Params {
  if (!params) {
    return {} as OrdersCreateFromCart$Params;
  }
  return {
      body: apiOrderFromCartAltDtoAdapter(params.body),
  };
}
