import { OrderSendOrderToParticipantGet$Params } from '../../../swagger/fn/order/order-send-order-to-participant-get';

export interface OrderSendOrderToParticipantGetParams {
  orderId: number;
}

export const orderSendOrderToParticipantGetParamsAdapter = {
  adapt(params?: OrderSendOrderToParticipantGetParams): OrderSendOrderToParticipantGet$Params {
    if (!params) {
      return {} as OrderSendOrderToParticipantGet$Params;
    }
    return {
      orderId: params.orderId,
    };
  }
};
