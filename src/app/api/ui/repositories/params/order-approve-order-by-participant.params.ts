import { ApproveOrderModelAlt } from '../../models/approve-order-model-alt.interface';
import { OrderApproveOrderByParticipant$Params } from '../../../swagger/fn/order/order-approve-order-by-participant';
import { apiApproveOrderModelAltDtoAdapter } from '../../adapters/models/api-approve-order-model.adapter';

// @ts-ignore
export interface OrderApproveOrderByParticipantParams {
  body?: ApproveOrderModelAlt;
}

export function orderApproveOrderByParticipantAdapter(params?: OrderApproveOrderByParticipantParams): OrderApproveOrderByParticipant$Params {
  if (!params) {
    return {} as OrderApproveOrderByParticipant$Params;
  }
  return {
      body: apiApproveOrderModelAltDtoAdapter(params.body),
  };
}
