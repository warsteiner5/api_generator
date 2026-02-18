import { OrdersRejectAgreementByCustomer$Params } from '../../../swagger/fn/orders/orders-reject-agreement-by-customer';

export interface OrdersRejectAgreementByCustomerParams {
  id: number;
  agreementId: number;
}

export const ordersRejectAgreementByCustomerParamsAdapter = {
  adapt(params?: OrdersRejectAgreementByCustomerParams): OrdersRejectAgreementByCustomer$Params {
    if (!params) {
      return {} as OrdersRejectAgreementByCustomer$Params;
    }
    return {
      id: params.id,
      agreementId: params.agreementId,
    };
  }
};
