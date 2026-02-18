import { Order } from '../../models/order.interface';
import { OrderSendOrderToParticipantPost$Params } from '../../../swagger/fn/order/order-send-order-to-participant-post';
import { adaptApiOrderDto } from '../../adapters/toDto/api-order-dto.adapter';

export interface OrderSendOrderToParticipantPostParams {
  body?: Order;
}

export const orderSendOrderToParticipantPostParamsAdapter = {
  adapt(params?: OrderSendOrderToParticipantPostParams): OrderSendOrderToParticipantPost$Params {
    if (!params) {
      return {} as OrderSendOrderToParticipantPost$Params;
    }
    return {
      body: adaptApiOrderDto(params.body),
    };
  }
};
