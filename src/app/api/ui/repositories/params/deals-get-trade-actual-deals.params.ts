import { DealsGetTradeActualDeals$Params } from '../../../swagger/fn/deals/deals-get-trade-actual-deals';

// @ts-ignore
export interface DealsGetTradeActualDealsParams {
  tradeId: number;
}

export function dealsGetTradeActualDealsAdapter(params?: DealsGetTradeActualDealsParams): DealsGetTradeActualDeals$Params {
  if (!params) {
    return {} as DealsGetTradeActualDeals$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
