import { OrderCancelOrder$Params } from '../../../swagger/fn/order/order-cancel-order';

export interface OrderCancelOrderParams {
  orderId: number;
}

export const orderCancelOrderParamsAdapter = {
  adapt(params?: OrderCancelOrderParams): OrderCancelOrder$Params {
    if (!params) {
      return {} as OrderCancelOrder$Params;
    }
    return {
      orderId: params.orderId,
    };
  }
};
