import { OrderApprove } from '../../models/order-approve.interface';
import { OrdersApproveAgreementByParticipant$Params } from '../../../swagger/fn/orders/orders-approve-agreement-by-participant';
import { adaptApiOrderApproveDto } from '../../adapters/toDto/api-order-approve-dto.adapter';

export interface OrdersApproveAgreementByParticipantParams {
  body?: OrderApprove;
}

export const ordersApproveAgreementByParticipantParamsAdapter = {
  adapt(params?: OrdersApproveAgreementByParticipantParams): OrdersApproveAgreementByParticipant$Params {
    if (!params) {
      return {} as OrdersApproveAgreementByParticipant$Params;
    }
    return {
      body: adaptApiOrderApproveDto(params.body),
    };
  }
};
