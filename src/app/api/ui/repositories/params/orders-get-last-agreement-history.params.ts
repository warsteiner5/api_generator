import { OrdersGetLastAgreementHistory$Params } from '../../../swagger/fn/orders/orders-get-last-agreement-history';

// @ts-ignore
export interface OrdersGetLastAgreementHistoryParams {
  id: number;
}

export function ordersGetLastAgreementHistoryAdapter(params?: OrdersGetLastAgreementHistoryParams): OrdersGetLastAgreementHistory$Params {
  if (!params) {
    return {} as OrdersGetLastAgreementHistory$Params;
  }
  return {
      id: params.id,
  };
}
