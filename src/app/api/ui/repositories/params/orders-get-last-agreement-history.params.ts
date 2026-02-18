import { OrdersGetLastAgreementHistory$Params } from '../../../swagger/fn/orders/orders-get-last-agreement-history';

export interface OrdersGetLastAgreementHistoryParams {
  id: number;
}

export const ordersGetLastAgreementHistoryParamsAdapter = {
  adapt(params?: OrdersGetLastAgreementHistoryParams): OrdersGetLastAgreementHistory$Params {
    if (!params) {
      return {} as OrdersGetLastAgreementHistory$Params;
    }
    return {
      id: params.id,
    };
  }
};
