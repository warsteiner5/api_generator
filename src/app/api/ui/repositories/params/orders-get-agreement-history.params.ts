import { OrdersGetAgreementHistory$Params } from '../../../swagger/fn/orders/orders-get-agreement-history';

export interface OrdersGetAgreementHistoryParams {
  id: number;
}

export const ordersGetAgreementHistoryParamsAdapter = {
  adapt(params?: OrdersGetAgreementHistoryParams): OrdersGetAgreementHistory$Params {
    if (!params) {
      return {} as OrdersGetAgreementHistory$Params;
    }
    return {
      id: params.id,
    };
  }
};
