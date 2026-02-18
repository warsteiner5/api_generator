import { OrderFilterObjectForParticipantAlt } from '../../models/order-filter-object-for-participant-alt.interface';
import { OrderGetOrdersForParticipant$Params } from '../../../swagger/fn/order/order-get-orders-for-participant';
import { adaptApiOrderFilterObjectForParticipantAltDto } from '../../adapters/toDto/api-order-filter-object-for-participant.adapter';

export interface OrderGetOrdersForParticipantParams {
  body?: OrderFilterObjectForParticipantAlt;
}

export const orderGetOrdersForParticipantParamsAdapter = {
  adapt(params?: OrderGetOrdersForParticipantParams): OrderGetOrdersForParticipant$Params {
    if (!params) {
      return {} as OrderGetOrdersForParticipant$Params;
    }
    return {
      body: adaptApiOrderFilterObjectForParticipantAltDto(params.body),
    };
  }
};
