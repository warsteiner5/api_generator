import { OrdersRejectAgreementByCustomer$Params } from '../../../swagger/fn/orders/orders-reject-agreement-by-customer';

// @ts-ignore
export interface OrdersRejectAgreementByCustomerParams {
  id: number;
  agreementId: number;
}

export function ordersRejectAgreementByCustomerAdapter(params?: OrdersRejectAgreementByCustomerParams): OrdersRejectAgreementByCustomer$Params {
  if (!params) {
    return {} as OrdersRejectAgreementByCustomer$Params;
  }
  return {
      id: params.id,
      agreementId: params.agreementId,
  };
}
