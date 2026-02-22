import { Order } from '../../models/order.interface';
import { OrderSendOrderToParticipantPost$Params } from '../../../swagger/fn/order/order-send-order-to-participant-post';
import { apiOrderDtoAdapter } from '../../adapters/models/api-order-dto.adapter';

// @ts-ignore
export interface OrderSendOrderToParticipantPostParams {
  body?: Order;
}

export function orderSendOrderToParticipantPostAdapter(params?: OrderSendOrderToParticipantPostParams): OrderSendOrderToParticipantPost$Params {
  if (!params) {
    return {} as OrderSendOrderToParticipantPost$Params;
  }
  return {
      body: apiOrderDtoAdapter(params.body),
  };
}
