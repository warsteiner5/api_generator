import { OrderRemoveDraft$Params } from '../../../swagger/fn/order/order-remove-draft';

// @ts-ignore
export interface OrderRemoveDraftParams {
  id: number;
}

export function orderRemoveDraftAdapter(params?: OrderRemoveDraftParams): OrderRemoveDraft$Params {
  if (!params) {
    return {} as OrderRemoveDraft$Params;
  }
  return {
      id: params.id,
  };
}
