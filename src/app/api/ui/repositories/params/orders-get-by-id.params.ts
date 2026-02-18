import { OrdersGetById$Params } from '../../../swagger/fn/orders/orders-get-by-id';

export interface OrdersGetByIdParams {
  id: number;
}

export const ordersGetByIdParamsAdapter = {
  adapt(params?: OrdersGetByIdParams): OrdersGetById$Params {
    if (!params) {
      return {} as OrdersGetById$Params;
    }
    return {
      id: params.id,
    };
  }
};
