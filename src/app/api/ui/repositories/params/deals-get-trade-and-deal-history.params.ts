import { DealsGetTradeAndDealHistory$Params } from '../../../swagger/fn/deals/deals-get-trade-and-deal-history';

export interface DealsGetTradeAndDealHistoryParams {
  tradeId: number;
  dealId: number;
}

export const dealsGetTradeAndDealHistoryParamsAdapter = {
  adapt(params?: DealsGetTradeAndDealHistoryParams): DealsGetTradeAndDealHistory$Params {
    if (!params) {
      return {} as DealsGetTradeAndDealHistory$Params;
    }
    return {
      tradeId: params.tradeId,
      dealId: params.dealId,
    };
  }
};
