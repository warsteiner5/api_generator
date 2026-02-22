import { OrderRejectOrderByParticipant$Params } from '../../../swagger/fn/order/order-reject-order-by-participant';
import { RejectOrderModelAlt } from '../../models/reject-order-model-alt.interface';
import { apiRejectOrderModelAltDtoAdapter } from '../../adapters/models/api-reject-order-model.adapter';

// @ts-ignore
export interface OrderRejectOrderByParticipantParams {
  body?: RejectOrderModelAlt;
}

export function orderRejectOrderByParticipantAdapter(params?: OrderRejectOrderByParticipantParams): OrderRejectOrderByParticipant$Params {
  if (!params) {
    return {} as OrderRejectOrderByParticipant$Params;
  }
  return {
      body: apiRejectOrderModelAltDtoAdapter(params.body),
  };
}
