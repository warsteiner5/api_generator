import { OrderGetFullOrderInfoForReSend$Params } from '../../../swagger/fn/order/order-get-full-order-info-for-re-send';

export interface OrderGetFullOrderInfoForReSendParams {
  id: number;
}

export const orderGetFullOrderInfoForReSendParamsAdapter = {
  adapt(params?: OrderGetFullOrderInfoForReSendParams): OrderGetFullOrderInfoForReSend$Params {
    if (!params) {
      return {} as OrderGetFullOrderInfoForReSend$Params;
    }
    return {
      id: params.id,
    };
  }
};
