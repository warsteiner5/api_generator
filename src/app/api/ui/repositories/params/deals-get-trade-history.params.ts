import { DealsGetTradeHistory$Params } from '../../../swagger/fn/deals/deals-get-trade-history';

export interface DealsGetTradeHistoryParams {
  tradeId: number;
}

export const dealsGetTradeHistoryParamsAdapter = {
  adapt(params?: DealsGetTradeHistoryParams): DealsGetTradeHistory$Params {
    if (!params) {
      return {} as DealsGetTradeHistory$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
