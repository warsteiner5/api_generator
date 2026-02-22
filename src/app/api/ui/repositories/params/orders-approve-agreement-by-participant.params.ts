import { OrderApprove } from '../../models/order-approve.interface';
import { OrdersApproveAgreementByParticipant$Params } from '../../../swagger/fn/orders/orders-approve-agreement-by-participant';
import { apiOrderApproveDtoAdapter } from '../../adapters/models/api-order-approve-dto.adapter';

// @ts-ignore
export interface OrdersApproveAgreementByParticipantParams {
  body?: OrderApprove;
}

export function ordersApproveAgreementByParticipantAdapter(params?: OrdersApproveAgreementByParticipantParams): OrdersApproveAgreementByParticipant$Params {
  if (!params) {
    return {} as OrdersApproveAgreementByParticipant$Params;
  }
  return {
      body: apiOrderApproveDtoAdapter(params.body),
  };
}
