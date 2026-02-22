import { OrderCancelOrder$Params } from '../../../swagger/fn/order/order-cancel-order';

// @ts-ignore
export interface OrderCancelOrderParams {
  orderId: number;
}

export function orderCancelOrderAdapter(params?: OrderCancelOrderParams): OrderCancelOrder$Params {
  if (!params) {
    return {} as OrderCancelOrder$Params;
  }
  return {
      orderId: params.orderId,
  };
}
