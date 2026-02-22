import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { OrdersAddAgreementByParticipant$Params } from '../../../swagger/fn/orders/orders-add-agreement-by-participant';
import { apiOrderAgreementAltDtoAdapter } from '../../adapters/models/api-order-agreement.adapter';

// @ts-ignore
export interface OrdersAddAgreementByParticipantParams {
  id: number;
  body?: OrderAgreementAlt;
}

export function ordersAddAgreementByParticipantAdapter(params?: OrdersAddAgreementByParticipantParams): OrdersAddAgreementByParticipant$Params {
  if (!params) {
    return {} as OrdersAddAgreementByParticipant$Params;
  }
  return {
      id: params.id,
      body: apiOrderAgreementAltDtoAdapter(params.body),
  };
}
