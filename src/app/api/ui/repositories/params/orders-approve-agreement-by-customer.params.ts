import { OrdersApproveAgreementByCustomer$Params } from '../../../swagger/fn/orders/orders-approve-agreement-by-customer';

// @ts-ignore
export interface OrdersApproveAgreementByCustomerParams {
  id: number;
  agreementId: number;
}

export function ordersApproveAgreementByCustomerAdapter(params?: OrdersApproveAgreementByCustomerParams): OrdersApproveAgreementByCustomer$Params {
  if (!params) {
    return {} as OrdersApproveAgreementByCustomer$Params;
  }
  return {
      id: params.id,
      agreementId: params.agreementId,
  };
}
