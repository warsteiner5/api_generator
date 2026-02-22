import { DealsGetTradeHistory$Params } from '../../../swagger/fn/deals/deals-get-trade-history';

// @ts-ignore
export interface DealsGetTradeHistoryParams {
  tradeId: number;
}

export function dealsGetTradeHistoryAdapter(params?: DealsGetTradeHistoryParams): DealsGetTradeHistory$Params {
  if (!params) {
    return {} as DealsGetTradeHistory$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
