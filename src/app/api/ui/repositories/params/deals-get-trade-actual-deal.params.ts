import { DealsGetTradeActualDeal$Params } from '../../../swagger/fn/deals/deals-get-trade-actual-deal';

// @ts-ignore
export interface DealsGetTradeActualDealParams {
  id: number;
}

export function dealsGetTradeActualDealAdapter(params?: DealsGetTradeActualDealParams): DealsGetTradeActualDeal$Params {
  if (!params) {
    return {} as DealsGetTradeActualDeal$Params;
  }
  return {
      id: params.id,
  };
}
