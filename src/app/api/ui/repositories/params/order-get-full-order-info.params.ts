import { OrderGetFullOrderInfo$Params } from '../../../swagger/fn/order/order-get-full-order-info';

// @ts-ignore
export interface OrderGetFullOrderInfoParams {
  id: number;
}

export function orderGetFullOrderInfoAdapter(params?: OrderGetFullOrderInfoParams): OrderGetFullOrderInfo$Params {
  if (!params) {
    return {} as OrderGetFullOrderInfo$Params;
  }
  return {
      id: params.id,
  };
}
