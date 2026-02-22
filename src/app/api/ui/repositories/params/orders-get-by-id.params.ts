import { OrdersGetById$Params } from '../../../swagger/fn/orders/orders-get-by-id';

// @ts-ignore
export interface OrdersGetByIdParams {
  id: number;
}

export function ordersGetByIdAdapter(params?: OrdersGetByIdParams): OrdersGetById$Params {
  if (!params) {
    return {} as OrdersGetById$Params;
  }
  return {
      id: params.id,
  };
}
