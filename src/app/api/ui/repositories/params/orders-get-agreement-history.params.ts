import { OrdersGetAgreementHistory$Params } from '../../../swagger/fn/orders/orders-get-agreement-history';

// @ts-ignore
export interface OrdersGetAgreementHistoryParams {
  id: number;
}

export function ordersGetAgreementHistoryAdapter(params?: OrdersGetAgreementHistoryParams): OrdersGetAgreementHistory$Params {
  if (!params) {
    return {} as OrdersGetAgreementHistory$Params;
  }
  return {
      id: params.id,
  };
}
