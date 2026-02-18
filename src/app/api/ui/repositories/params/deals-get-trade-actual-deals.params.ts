import { DealsGetTradeActualDeals$Params } from '../../../swagger/fn/deals/deals-get-trade-actual-deals';

export interface DealsGetTradeActualDealsParams {
  tradeId: number;
}

export const dealsGetTradeActualDealsParamsAdapter = {
  adapt(params?: DealsGetTradeActualDealsParams): DealsGetTradeActualDeals$Params {
    if (!params) {
      return {} as DealsGetTradeActualDeals$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
