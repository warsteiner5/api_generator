import { DealsSetDealExecuted$Params } from '../../../swagger/fn/deals/deals-set-deal-executed';

// @ts-ignore
export interface DealsSetDealExecutedParams {
  id: number;
}

export function dealsSetDealExecutedAdapter(params?: DealsSetDealExecutedParams): DealsSetDealExecuted$Params {
  if (!params) {
    return {} as DealsSetDealExecuted$Params;
  }
  return {
      id: params.id,
  };
}
