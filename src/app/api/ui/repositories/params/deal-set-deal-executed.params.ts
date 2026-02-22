import { DealSetDealExecuted$Params } from '../../../swagger/fn/deal/deal-set-deal-executed';

// @ts-ignore
export interface DealSetDealExecutedParams {
  id: number;
}

export function dealSetDealExecutedAdapter(params?: DealSetDealExecutedParams): DealSetDealExecuted$Params {
  if (!params) {
    return {} as DealSetDealExecuted$Params;
  }
  return {
      id: params.id,
  };
}
