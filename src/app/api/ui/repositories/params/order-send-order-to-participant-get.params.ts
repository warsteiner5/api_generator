import { OrderSendOrderToParticipantGet$Params } from '../../../swagger/fn/order/order-send-order-to-participant-get';

// @ts-ignore
export interface OrderSendOrderToParticipantGetParams {
  orderId: number;
}

export function orderSendOrderToParticipantGetAdapter(params?: OrderSendOrderToParticipantGetParams): OrderSendOrderToParticipantGet$Params {
  if (!params) {
    return {} as OrderSendOrderToParticipantGet$Params;
  }
  return {
      orderId: params.orderId,
  };
}
