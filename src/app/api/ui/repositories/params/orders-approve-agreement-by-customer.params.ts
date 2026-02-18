import { OrdersApproveAgreementByCustomer$Params } from '../../../swagger/fn/orders/orders-approve-agreement-by-customer';

export interface OrdersApproveAgreementByCustomerParams {
  id: number;
  agreementId: number;
}

export const ordersApproveAgreementByCustomerParamsAdapter = {
  adapt(params?: OrdersApproveAgreementByCustomerParams): OrdersApproveAgreementByCustomer$Params {
    if (!params) {
      return {} as OrdersApproveAgreementByCustomer$Params;
    }
    return {
      id: params.id,
      agreementId: params.agreementId,
    };
  }
};
