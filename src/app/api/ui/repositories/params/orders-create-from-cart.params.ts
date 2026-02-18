import { OrderFromCartAlt } from '../../models/order-from-cart-alt.interface';
import { OrdersCreateFromCart$Params } from '../../../swagger/fn/orders/orders-create-from-cart';
import { adaptApiOrderFromCartAltDto } from '../../adapters/toDto/api-order-from-cart.adapter';

export interface OrdersCreateFromCartParams {
  body?: OrderFromCartAlt;
}

export const ordersCreateFromCartParamsAdapter = {
  adapt(params?: OrdersCreateFromCartParams): OrdersCreateFromCart$Params {
    if (!params) {
      return {} as OrdersCreateFromCart$Params;
    }
    return {
      body: adaptApiOrderFromCartAltDto(params.body),
    };
  }
};
