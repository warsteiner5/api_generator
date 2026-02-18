import { OrdersRejectAgreementByParticipant$Params } from '../../../swagger/fn/orders/orders-reject-agreement-by-participant';

export interface OrdersRejectAgreementByParticipantParams {
  id: number;
  agreementId: number;
}

export const ordersRejectAgreementByParticipantParamsAdapter = {
  adapt(params?: OrdersRejectAgreementByParticipantParams): OrdersRejectAgreementByParticipant$Params {
    if (!params) {
      return {} as OrdersRejectAgreementByParticipant$Params;
    }
    return {
      id: params.id,
      agreementId: params.agreementId,
    };
  }
};
