import { DealGetActiveDealForOrder$Params } from '../../../swagger/fn/deal/deal-get-active-deal-for-order';

// @ts-ignore
export interface DealGetActiveDealForOrderParams {
  id: number;
}

export function dealGetActiveDealForOrderAdapter(params?: DealGetActiveDealForOrderParams): DealGetActiveDealForOrder$Params {
  if (!params) {
    return {} as DealGetActiveDealForOrder$Params;
  }
  return {
      id: params.id,
  };
}
