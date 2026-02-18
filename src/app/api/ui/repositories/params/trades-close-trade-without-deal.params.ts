import { TradesCloseTradeWithoutDeal$Params } from '../../../swagger/fn/trades/trades-close-trade-without-deal';

export interface TradesCloseTradeWithoutDealParams {
  id: number;
}

export const tradesCloseTradeWithoutDealParamsAdapter = {
  adapt(params?: TradesCloseTradeWithoutDealParams): TradesCloseTradeWithoutDeal$Params {
    if (!params) {
      return {} as TradesCloseTradeWithoutDeal$Params;
    }
    return {
      id: params.id,
    };
  }
};
