import { OrderFilterObjectForParticipantAlt } from '../../models/order-filter-object-for-participant-alt.interface';
import { OrderGetOrdersForParticipant$Params } from '../../../swagger/fn/order/order-get-orders-for-participant';
import { apiOrderFilterObjectForParticipantAltDtoAdapter } from '../../adapters/models/api-order-filter-object-for-participant.adapter';

// @ts-ignore
export interface OrderGetOrdersForParticipantParams {
  body?: OrderFilterObjectForParticipantAlt;
}

export function orderGetOrdersForParticipantAdapter(params?: OrderGetOrdersForParticipantParams): OrderGetOrdersForParticipant$Params {
  if (!params) {
    return {} as OrderGetOrdersForParticipant$Params;
  }
  return {
      body: apiOrderFilterObjectForParticipantAltDtoAdapter(params.body),
  };
}
