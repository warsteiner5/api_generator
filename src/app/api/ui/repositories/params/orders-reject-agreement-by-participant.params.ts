import { OrdersRejectAgreementByParticipant$Params } from '../../../swagger/fn/orders/orders-reject-agreement-by-participant';

// @ts-ignore
export interface OrdersRejectAgreementByParticipantParams {
  id: number;
  agreementId: number;
}

export function ordersRejectAgreementByParticipantAdapter(params?: OrdersRejectAgreementByParticipantParams): OrdersRejectAgreementByParticipant$Params {
  if (!params) {
    return {} as OrdersRejectAgreementByParticipant$Params;
  }
  return {
      id: params.id,
      agreementId: params.agreementId,
  };
}
