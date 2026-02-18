import { OrdersCancel$Params } from '../../../swagger/fn/orders/orders-cancel';

export interface OrdersCancelParams {
  id: number;
}

export const ordersCancelParamsAdapter = {
  adapt(params?: OrdersCancelParams): OrdersCancel$Params {
    if (!params) {
      return {} as OrdersCancel$Params;
    }
    return {
      id: params.id,
    };
  }
};
