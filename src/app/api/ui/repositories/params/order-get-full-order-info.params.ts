import { OrderGetFullOrderInfo$Params } from '../../../swagger/fn/order/order-get-full-order-info';

export interface OrderGetFullOrderInfoParams {
  id: number;
}

export const orderGetFullOrderInfoParamsAdapter = {
  adapt(params?: OrderGetFullOrderInfoParams): OrderGetFullOrderInfo$Params {
    if (!params) {
      return {} as OrderGetFullOrderInfo$Params;
    }
    return {
      id: params.id,
    };
  }
};
