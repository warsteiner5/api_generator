import { DealsGetTradeAndDealHistory$Params } from '../../../swagger/fn/deals/deals-get-trade-and-deal-history';

// @ts-ignore
export interface DealsGetTradeAndDealHistoryParams {
  tradeId: number;
  dealId: number;
}

export function dealsGetTradeAndDealHistoryAdapter(params?: DealsGetTradeAndDealHistoryParams): DealsGetTradeAndDealHistory$Params {
  if (!params) {
    return {} as DealsGetTradeAndDealHistory$Params;
  }
  return {
      tradeId: params.tradeId,
      dealId: params.dealId,
  };
}
