import { OrderAgreementAlt } from '../../models/order-agreement-alt.interface';
import { OrdersAddAgreementByParticipant$Params } from '../../../swagger/fn/orders/orders-add-agreement-by-participant';
import { adaptApiOrderAgreementAltDto } from '../../adapters/toDto/api-order-agreement.adapter';

export interface OrdersAddAgreementByParticipantParams {
  id: number;
  body?: OrderAgreementAlt;
}

export const ordersAddAgreementByParticipantParamsAdapter = {
  adapt(params?: OrdersAddAgreementByParticipantParams): OrdersAddAgreementByParticipant$Params {
    if (!params) {
      return {} as OrdersAddAgreementByParticipant$Params;
    }
    return {
      id: params.id,
      body: adaptApiOrderAgreementAltDto(params.body),
    };
  }
};
