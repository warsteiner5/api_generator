import { OrderGetFullOrderInfoForReSend$Params } from '../../../swagger/fn/order/order-get-full-order-info-for-re-send';

// @ts-ignore
export interface OrderGetFullOrderInfoForReSendParams {
  id: number;
}

export function orderGetFullOrderInfoForReSendAdapter(params?: OrderGetFullOrderInfoForReSendParams): OrderGetFullOrderInfoForReSend$Params {
  if (!params) {
    return {} as OrderGetFullOrderInfoForReSend$Params;
  }
  return {
      id: params.id,
  };
}
