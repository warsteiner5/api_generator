import { OrdersCancel$Params } from '../../../swagger/fn/orders/orders-cancel';

// @ts-ignore
export interface OrdersCancelParams {
  id: number;
}

export function ordersCancelAdapter(params?: OrdersCancelParams): OrdersCancel$Params {
  if (!params) {
    return {} as OrdersCancel$Params;
  }
  return {
      id: params.id,
  };
}
